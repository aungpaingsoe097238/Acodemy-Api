const Course = require("../../../models").Course;
const Category = require("../../../models").Category;
const response = require("../../../helpers/response");

const index = async (req, res) => {
  const courses = await Course.findAll({
    order: [["id", "DESC"]],
    include: {
      attributes: ["id", "name"],
      model: Category,
      as: "category",
    },
  });
  return response.success(res, "Category list successfully", courses);
};

const show = async (req, res) => {
  try {
    const { slug } = req.params;

    const course = await Course.findOne({
      where: { slug },
      include: [
        {
          attributes: ["id", "name"],
          model: Category,
          as: "category",
        },
      ],
    });

    if (!course) {
      return response.error(res, "Course not found");
    }

    return response.success(res, "Course show successfully", course);
  } catch (error) {
    return response.error(res, "Failed to show course");
  }
};

module.exports = {
  index,
  show,
};
