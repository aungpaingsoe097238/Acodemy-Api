const User = require("../../../models").User;
const Role = require("../../../models").Role;
const response = require("../../../helpers/response");

const index = async (req, res) => {
  const users = await User.findAll({
    attributes: { exclude: ["token", "password"] },
    include: {
      model: Role,
      as: "roles",
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return response.success(res, "User list successfully", users);
};

module.exports = { index };
