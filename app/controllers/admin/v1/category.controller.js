const Category = require("../../../models").Category;
const response = require("../../../helpers/response");

const index = async (req, res) => {
  const categories = await Category.findAll();
  return response.success(res, "Category list successfully", categories);
};

const store = async (req, res) => {
  try {
    const { name, parentId } = req.body;

    // Create a new category
    const newCategory = await Category.create({
      name,
      parentId,
    });

    return response.success(res, "Category created successfully", newCategory);
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
    category.name = name;
    category.parentId = parentId;

    // Save the updated category to the database
    await category.save();

    return response.success(res, "Category updated successfully", category);
  } catch (error) {
    return response.error(res, "Failed to update category");
  }
};

const drop = async (req, res) => {
  try {
    const categoryId = req.params.id; 
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return response.error(res, "Category not found");
    }
    await category.destroy();
    return response.message(res, "Category deleted successfully");
  } catch (error) {
    console.error("Error deleting category:", error);
    return response.error(res, "Failed to delete category");
  }
};

module.exports = { index, store, update, drop };
