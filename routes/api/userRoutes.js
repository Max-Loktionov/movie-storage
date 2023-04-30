const express = require("express");

const router = express.Router();

const { validation, auth } = require("../../middlewares");
const { userControllers: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");
const { joiRegisterSchema } = require("../../models/userSceme");

router.get("/current", auth, ctrlWrapper(ctrl.getUserCurrentContr));

router.post("/register", validation(joiRegisterSchema), ctrlWrapper(ctrl.registerUserContr));

router.post("/login", validation(joiRegisterSchema), ctrlWrapper(ctrl.loginUserContr));

router.post("/logout", auth, ctrlWrapper(ctrl.logoutUserContr));

module.exports = router;
