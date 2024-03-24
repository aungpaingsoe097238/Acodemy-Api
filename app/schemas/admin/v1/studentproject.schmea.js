const Category = require("../../../models").Category;

const store = {
  title: {
    notEmpty: { errorMessage: "Title field is required." },
  },
  description: {
    notEmpty: { errorMessage: "Description field is required.jd" },
  },
  categoryId: {
    notEmpty: { errorMessage: "Category field is required." },
    custom: {
      options: async (value, { req }) => {
        if (value) {
          const existingCategoryId = await Category.findByPk(value);
          if (!existingCategoryId) {
            throw new Error("Category field is invalid");
          }
        }
      },
    },
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
      },
    },
  },
};

module.exports = {
  store,
  update
};
