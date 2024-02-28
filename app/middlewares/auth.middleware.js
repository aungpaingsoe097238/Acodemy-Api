const jwt = require("../helpers/jwt");
const User = require("../models").User;
const response = require("../../app/helpers/response");

const authMiddleware = async (req, res, next) => {
  if (!req.headers.authorization) {
    return response.error(res, "Unauthorized", 401);
  }

  const token = req.headers.authorization.split(" ")[1];
  const user = await User.findOne({ token });

  if (!user) {
    return response.error(res, "Unauthorized", 401);
  }

  req.user = user;
  next();
};

module.exports = authMiddleware;
