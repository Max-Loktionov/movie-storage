const express = require("express");

const { movieControllers: ctrl } = require("../../controllers");
const { joiSchema } = require("../../models/movieScheme");
const { auth, validation, isValidId } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAllMoviesByUserContr));

router.get("/:id", auth, isValidId, ctrlWrapper(ctrl.geMovietByIdContr));

router.post("/", auth, validation(joiSchema), ctrlWrapper(ctrl.addMovieContr));

router.delete("/:id", auth, isValidId, ctrlWrapper(ctrl.deleteMovieByIdContr));

router.put("/:id", auth, isValidId, validation(joiSchema), ctrlWrapper(ctrl.updateMovieByIdContr));

module.exports = router;
