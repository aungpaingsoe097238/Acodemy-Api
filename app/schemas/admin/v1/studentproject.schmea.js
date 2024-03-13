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

          if (existingCategoryId.parentId !== null) {
            throw new Error("Category field is not main category");
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

          if (existingCategoryId.parentId !== null) {
            throw new Error("Category field is not main category");
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
