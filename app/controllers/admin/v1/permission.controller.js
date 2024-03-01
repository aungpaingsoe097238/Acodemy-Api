const Permission = require("../../../models").Permission;
const response = require("../../../helpers/response");

const index = async (req, res) => {
  const permissions = await Permission.findAll();
  return response.success(res, "Permission list successfully", permissions);
};

module.exports = { index };
