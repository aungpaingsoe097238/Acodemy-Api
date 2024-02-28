const Course = require("../../../models").Course;
const Category = require("../../../models").Category;
const response = require("../../../helpers/response");

const index = async (req, res) => {
  
  const courses = await Course.findAll({
    attributes: ["id", "title"],
    order: [["id", "DESC"]],
    include: {
      model: Category,
      as: "categories",
    },
  });

  return response.success(res, "Course list successfully", courses);
};

const store = async (req, res) => {
  try {
    const course = await Category.create(req.body);
    return response.success(res, "Course created successfully", course);
  } catch (error) {
    return response.error(res, "Failed to create course");
  }
};

const show = async (req, res) => {
  return response.success(res, "Course list successfully", []);
};

const update = async (req, res) => {
  return response.success(res, "Course list successfully", []);
};

const drop = async (req, res) => {
  return response.success(res, "Course list successfully", []);
};

module.exports = { index, store, show, update, drop };
