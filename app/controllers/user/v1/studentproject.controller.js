const StudentProject = require("../../../models").StudentProject;
const Category = require("../../../models").Category;
const response = require("../../../helpers/response");

const index = async (req, res) => {
  const studentProject = await StudentProject.findAll({
    order: [["id", "DESC"]],
    include: {
      attributes: ["id", "name"],
      model: Category,
      as: "category",
    },
  });
  return response.success(res, "Student project list successfully", studentProject);
};

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const studentProject = await StudentProject.findByPk(id,{
      include: [
        {
          attributes: ["id", "name"],
          model: Category,
          as: "category",
        },
      ],
    });

    if (!studentProject) {
      return response.error(res, "Student project not found");
    }

    return response.success(res, "Student project show successfully", studentProject);
  } catch (error) {
    return response.error(res, "Failed to show student project");
  }
};

module.exports = {
  index,
  show,
};
