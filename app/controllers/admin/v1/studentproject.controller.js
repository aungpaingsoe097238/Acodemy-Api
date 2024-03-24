const StudentProject = require("../../../models").StudentProject;
const Category = require("../../../models").Category;
const response = require("../../../helpers/response");
const toolbox = require("../../../utils/toolbox");

const index = async (req, res) => {
  const studentProjects = await StudentProject.findAll({
    order: [["id", "DESC"]],
    include: {
      model: Category,
      as: "category",
    },
  });

  return response.success(res, "Student project list successfully", studentProjects);
};

const store = async (req, res) => {
  try {
    const { title, description, categoryId } =
      req.body;

    if(!req.filename){
      return response.error(res, "Image field is required");
    }  

    const studentProject = await StudentProject.create({
      title: title,
      slug: toolbox.slugify(title).slice(0, 50),
      description: description,
      except: toolbox.except(description),
      categoryId: categoryId,
      imageUrl: req.filename
    });

    return response.success(res, "Student project created successfully", studentProject);
  } catch (error) {
    return response.error(res, "Failed to create student project");
  }
};

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const studentProject = await StudentProject.findByPk(id, {
      include: [
        {
          attributes: ["id", "name"],
          model: Category,
          as: "category",
        },
      ],
    });

    if (!studentProject) {
      return response.error(res, "student project not found");
    }

    return response.success(res, "student project show successfully", studentProject);
  } catch (error) {
    return response.error(res, "Failed to show student project");
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, categoryId } =
      req.body;

    const studentProject = await StudentProject.findByPk(id);

    if (!studentProject) {
      return response.error(res, "Student project not found");
    } 

    if (title) {
      studentProject.slug = toolbox.slugify(title).slice(0, 50);
      studentProject.title = title;
    }

    if (description) {
      studentProject.description = description;
      studentProject.except = toolbox.except(description);
    }

    if (categoryId) {
      studentProject.categoryId = categoryId;
    }

    if (req.filename) {
      studentProject.imageUrl = req.filename;
    }

    await studentProject.save();
    return response.success(res, "Student project updated successfully", studentProject);
  } catch (error) {
    return response.error(res, "Failed to update student project");
  }
};

const drop = async (req, res) => {
  try {
    const { id } = req.params;
    const studentProject = await StudentProject.findByPk(id);
    if (!studentProject) {
      return response.error(res, "Student project not found");
    }
    await studentProject.destroy();
    return response.message(res, "Student project deleted successfully");
  } catch (error) {
    return response.error(res, "Failed to delete student project");
  }
};

module.exports = { index, store, show, update, drop };
