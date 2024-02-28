const Category = require("../../../models").Category;
const response = require("../../../helpers/response");
const customValidationResult = require("../../../helpers/customValidationResult");

const index = async (req, res) => {
  const categories = await Category.findAll();
  return response.success(res, "Category list successfully", categories);
};

const store = async (req, res) => {
  try {
    const { name, parentId } = req.body;

    // Create a new category
    const category = await Category.create({
      name,
      parentId,
    });

    return response.success(res, "Category created successfully", category);
  } catch (error) {
    return response.error(res, "Failed to create category");
  }
};

const update = async (req, res) => {
  try {
    const categoryId = req.params.id; // Assuming the category ID is passed as a route parameter
    const { name, parentId } = req.body;

    // Find the category to be updated
    const category = await Category.findByPk(categoryId);

    if (!category) {
      return response.error(res, "Category not found");
    }

    // Update category attributes
    if(name){
      category.name = name;
    }

    if(parentId){
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
    const categoryId = req.params.id; // Assuming the category ID is passed as a route parameter

    // Find the category to be deleted
    const category = await Category.findByPk(categoryId);

    if (!category) {
      return response.error(res, "Category not found");
    }

    // Delete the category
    await category.destroy();

    return response.message(res, "Category deleted successfully");
  } catch (error) {
    console.error("Error deleting category:", error);
    return response.error(res, "Failed to delete category");
  }
};

module.exports = { index, store, update, drop };
