const Course = require("../../../models").Course;
const Category = require("../../../models").Category;
const response = require("../../../helpers/response");
const toolbox = require("../../../utils/toolbox");

const index = async (req, res) => {
  const courses = await Course.findAll({
    order: [["id", "DESC"]],
    include: {
      model: Category,
      as: "category",
    },
  });

  return response.success(res, "Course list successfully", courses);
};

const store = async (req, res) => {
  try {
    const { title, description, categoryId, price, skill, lectures, duration,certificateStatus, rating } =
      req.body;

    if(!req.filename){
      return response.error(res, "Image field is required");
    }  

    const course = await Course.create({
      title: title,
      slug: toolbox.slugify(title).slice(0, 50),
      description: description,
      except: toolbox.except(description),
      categoryId: categoryId,
      price: price,
      skill: skill,
      imageUrl: req.filename,
      lectures: lectures,
      duration: duration,
      rating: rating,
      certificateStatus: certificateStatus
    });

    return response.success(res, "Course created successfully", course);
  } catch (error) {
    return response.error(res, "Failed to create course", error);
  }
};

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Course.findByPk(id, {
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
    return response.error(res, "Failed to show course", error);
  }
};

const update = async (req, res) => {
  try {

    const { id } = req.params;
    const { title, description, categoryId, price, skill, lectures, duration, rating } =
      req.body;
    const course = await Course.findByPk(id);

    if (!course) {
      return response.error(res, "Course not found");
    }

    if (title) {
      course.slug = toolbox.slugify(title).slice(0, 50);
      course.title = title;
    }

    if (description) {
      course.description = description;
      course.except = toolbox.except(description);
    }

    if (categoryId) {
      course.categoryId = categoryId;
    }

    if (price) {
      course.price = price;
    }

    if (skill) {
      course.skill = skill;
    }

    if (lectures) {
      course.lectures = lectures;
    }

    if (duration) {
      course.duration = duration;
    }

    if(rating){
      course.rating = rating;
    }

    if (req.filename) {
      course.imageUrl = req.filename;
    }

    await course.save();

    return response.success(res, "Course updated successfully", course);
  } catch (error) {
    return response.error(res, "Failed to update course", error);
  }
};

const drop = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByPk(id);
    if (!course) {
      return response.error(res, "Course not found");
    }
    await course.destroy();
    return response.message(res, "Course deleted successfully");
  } catch (error) {
    return response.error(res, "Failed to delete course", error);
  }
};

module.exports = { index, store, show, update, drop };
