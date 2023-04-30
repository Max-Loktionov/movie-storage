const getUserCurrentContr = async (req, res, next) => {
  const { email, username } = req.user;
  res.json({
    status: "success",
    code: 200,
    response: {
      user: {
        email,
        username,
      },
    },
  });
};

module.exports = getUserCurrentContr;
