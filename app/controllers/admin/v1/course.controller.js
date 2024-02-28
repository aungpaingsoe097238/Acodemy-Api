const Course = require("../../../models").Course;
const Category = require("../../../models").Category;
const response = require("../../../helpers/response");

const index = async (req, res) => {
  return response.success(res, "Course list successfully", []);
};

module.exports = { index };
