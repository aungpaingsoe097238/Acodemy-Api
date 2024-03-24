const Category = require("../../../models").Category;
const response = require("../../../helpers/response");

const index = async (req, res) => {
  const categories = await Category.findAll({
    attributes: ["id", "name"],
    order: [["id", "DESC"]]
  });
  return response.success(res, "Category list successfully", categories);
};

const store = async (req, res) => {
  try {
    const { name, parentId } = req.body;

    const category = await Category.create({
      name,
      parentId,
    });

    return response.success(res, "Category created successfully", category);
  } catch (error) {
    return response.error(res, "Failed to create category");
  }
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

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, parentId } = req.body;
    const category = await Category.findByPk(id);
    if (!category) {
      return response.error(res, "Category not found");
    }

    if (name) {
      category.name = name;
    }

    if (parentId) {
      category.parentId = parentId;
    }

    await category.save();

    return response.success(res, "Category updated successfully", category);
  } catch (error) {
    return response.error(res, "Failed to update category");
  }
};

const drop = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (!category) {
      return response.error(res, "Category not found");
    }
    await category.destroy();
    return response.message(res, "Category deleted successfully");
  } catch (error) {
    return response.error(res, "Failed to delete category");
  }
};

module.exports = { index, store, show, update, drop };
