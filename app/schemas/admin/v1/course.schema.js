const Course = require("../../../models").Course;

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
  },
  price: {
    notEmpty: { errorMessage: "Price field is required" },
  },
  skill: {
    notEmpty: { errorMessage: "Skill field is required" },
  },
  lectures: {
    notEmpty: { errorMessage: "Lectures field is required" },
  },
  duration: {
    notEmpty: { errorMessage: "Duration field is required" },
  },
};

const update = {
  title: {
    notEmpty: { errorMessage: "Title field is required." },
  },
  categoryId: {
    notEmpty: { errorMessage: "Category field is required" },
  },
  price: {
    notEmpty: { errorMessage: "Price field is required" },
  },
  skill: {
    notEmpty: { errorMessage: "Skill field is required" },
  },
  lectures: {
    notEmpty: { errorMessage: "Lectures field is required" },
  },
  duration: {
    notEmpty: { errorMessage: "Duration field is required" },
  },
};

module.exports = {
  store,
  update,
};
