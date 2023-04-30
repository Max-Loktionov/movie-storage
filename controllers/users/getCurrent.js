const getCurrent = async (req, res, next) => {
  const { email, userName } = req.user;
  res.json({
    status: "success",
    code: 200,
    response: {
      user: {
        email,
        userName,
      },
    },
  });
};

module.exports = getCurrent;
