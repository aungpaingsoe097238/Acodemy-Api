const login = (req, res, next) => {
  return res.status(200).json({
    status: true,
    message: "success",
  });
};

module.exports = { login };
