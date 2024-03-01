const Category = require("../../../models").Category;

const store = {
  name: {
    notEmpty: { errorMessage: "Name field is required." },
    custom: {
      options: async (value, { req }) => {
        if (value) {
          const existingCategory = await Category.findOne({
            where: { name: value },
          });
          if (existingCategory) {
            throw new Error("Name must be unique.");
          }
        }
      },
    },
  },
};

const update = {
  name: {
    notEmpty: { errorMessage: "Name field is required." },
  },
};

module.exports = {
  store,
  update,
};
