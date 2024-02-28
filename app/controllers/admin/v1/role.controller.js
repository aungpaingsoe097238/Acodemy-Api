const Role = require("../../../models").Role;
const response = require("../../../helpers/response");

const index = async (req, res) => {
  const roles = await Role.findAll();
  return response.success(res, "Role list successfully", roles);
};

module.exports = { index };