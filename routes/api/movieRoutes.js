const express = require("express");

const { movieControllers: ctrl } = require("../../controllers");
const { joiSchema, favoriteJoiSchema } = require("../../models/movieScheme");
const { auth, validation, isValidId } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

// router.get("/", auth, ctrlWrapper(ctrl.getAll));

// router.get("/:id", auth, isValidId, ctrlWrapper(ctrl.getById));

router.post("/", auth, validation(joiSchema), ctrlWrapper(ctrl.addMovieContr));

// router.put("/:id", auth, isValidId, validation(joiSchema), ctrlWrapper(ctrl.updateById));

// router.patch("/:id/favorite", auth, isValidId, validation(favoriteJoiSchema), ctrlWrapper(ctrl.updateFavoriteById));

// router.delete("/:id", auth, isValidId, ctrlWrapper(ctrl.removeById));

module.exports = router;
