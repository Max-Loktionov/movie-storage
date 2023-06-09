const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const { RequestError } = require("../../helpers");

const { SECRET_KEY_JWT } = process.env;

const loginUserContr = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    next(RequestError(401, `Email: ${email} is wrong`));
  }

  const passCompare = await bcrypt.compare(password, user.password);
  if (!passCompare) {
    next(RequestError(401, "Password is wrong"));
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY_JWT, { expiresIn: "1d" });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    status: "success",
    code: 200,
    response: {
      token,
      user: {
        email,
      },
    },
  });
};

module.exports = loginUserContr;
