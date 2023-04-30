const { Movie } = require("../../models");
const RequestError = require("../../helpers/RequestError");

const geMovietByIdContr = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const result = await Movie.findOne({ _id: id, owner });

  if (!result) {
    throw RequestError(404, `Movie with id:${id} not found`);
  }

  res.json({ status: "success", code: "200", data: { result } });
};

module.exports = geMovietByIdContr;
