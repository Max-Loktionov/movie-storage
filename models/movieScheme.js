const { Schema, model } = require("mongoose");
const Joi = require("joi").extend(require("@joi/date"));

const { handleError } = require("../helpers");

const movieSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Set title for movie"],
      unique: true,
    },
    director: {
      type: String,
      default: "noName",
    },
    releaseDate: {
      type: String,
      default: "01-01-1900",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false }
);

const joiSchema = Joi.object({
  title: Joi.string().trim().min(4).max(40).required(),
  director: Joi.string().min(3).max(50),
  releaseDate: Joi.date().format("DD-MM-YYYY").max("now"),
});

movieSchema.post("save", handleError);

const Movie = model("movie", movieSchema);

module.exports = {
  Movie,
  joiSchema,
};
