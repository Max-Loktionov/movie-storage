const { Movie } = require("../../models");

const deleteMovieByIdContr = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const result = await Movie.findOneAndDelete({ _id: id, owner });

  if (!result) {
    const error = new Error(`Movie with id:${id} not found`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: "success",
    code: "200",
    data: { result },
    message: "Movie deleted",
  });
};
module.exports = deleteMovieByIdContr;
