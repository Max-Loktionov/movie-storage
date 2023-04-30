const bcrypt = require("bcryptjs");

const { User } = require("../../models");
const { RequestError } = require("../../helpers");

const registerUserContr = async (req, res, next) => {
  const { email, password, userName } = req.body;
  const user = await User.findOne({ email }, { s: "250" });
  if (user) {
    next(RequestError(409, `Email: ${email} in use`));
  }

  if (!password) {
    next(RequestError(400, `Password in body request undefined`));
  }
  const hashPassword = await bcrypt.hash(password, 10);

  await User.create({ email, userName, password: hashPassword });

  res.status(201).json({
    status: "success",
    code: 201,
    user: {
      email,
      userName,
    },
  });
};

module.exports = registerUserContr;
