const Category = require("../../../models").Category;
const response = require("../../../helpers/response");

const index = async (req, res) => {
  const categories = await Category.findAll({
    attributes: ["id", "name"],
    order: [["id", "DESC"]],
  });
  return response.success(res, "Category list successfully", categories);
};

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findByPk(id, {
      attributes: ["id", "name"],
    });

    if (!category) {
      return response.error(res, "Category not found");
    }

    return response.success(res, "Category show successfully", category);
  } catch (error) {
    return response.error(res, "Failed to show category");
  }
};

module.exports = {
  index,
  show,
};
