const Course = require("../../../models").Course;
const Category = require("../../../models").Category;

const store = {
  title: {
    notEmpty: { errorMessage: "Title field is required." },
    custom: {
      options: async (value, { req }) => {
        if (value) {
          const existingCourse = await Course.findOne({
            where: { title: value },
          });
          if (existingCourse) {
            throw new Error("Title must be unique.");
          }
        }
      },
    },
  },
  categoryId: {
    notEmpty: { errorMessage: "Category field is required" },
    custom: {
      options: async (value, { req }) => {
        if (value) {
          const existingCategoryId = await Category.findByPk(value);
          if (!existingCategoryId) {
            throw new Error("Category field is invalid");
          }

          if (existingCategoryId.parentId === null) {
            throw new Error("Category field is not allow main category");
          }
        }
      },
    },
  },
  price: {
    notEmpty: { errorMessage: "Price field is required" },
  },
  skill: {
    notEmpty: { errorMessage: "Skill field is required" },
    isIn: {
      options: [["Beginner", "Intermediate", "Advanced"]],
      errorMessage: "Skill field is invalid",
    },
  },
  rating: {
    notEmpty: { errorMessage: "Rating field is required" },
  },
  lectures: {
    notEmpty: { errorMessage: "Lectures field is required" },
  },
  duration: {
    notEmpty: { errorMessage: "Duration field is required" },
  },
};

const update = {
  categoryId: {
    optional: true,
    custom: {
      options: async (value, { req }) => {
        if (value) {
          const existingCategoryId = await Category.findByPk(value);
          if (!existingCategoryId) {
            throw new Error("Category field is invalid");
          }
        }
        if (existingCategoryId.parentId === null) {
          throw new Error("Category field is not allow main category");
        }
      },
    },
  },
  skill: {
    optional:true,    
    isIn: {
      options: [["Beginner", "Intermediate", "Advanced"]],
      errorMessage: "Skill field is invalid",
    },
  }
};

module.exports = {
  store,
  update,
};
