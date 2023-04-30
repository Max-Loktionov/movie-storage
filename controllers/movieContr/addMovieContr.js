const { Movie } = require("../../models");

const addMovieContr = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Movie.create({ ...req.body, owner });
  res.status(201).json({ status: "success", code: "201", data: { result } });
};

module.exports = addMovieContr;
