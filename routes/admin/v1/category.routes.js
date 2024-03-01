const router = require("express").Router();
const { checkSchema } = require("express-validator");
//Controllers
const categoryController = require("../../../app/controllers/admin/v1/category.controller");
//Middlewares
const authMiddleware = require("../../../app/middlewares/auth.middleware");
//Schemas
const categorySchema = require("../../../app/schemas/admin/v1/category.schema");
//CustomValidationResult
const customValidationResult = require("../../../app/helpers/customValidationResult");

router.get("/", authMiddleware, categoryController.index);
router.post(
  "/",
  authMiddleware,
  checkSchema(categorySchema.store),
  (req, res, next) =>
    customValidationResult(req, res, next, "Category create failed"),
  categoryController.store
);
router
  .route("/:id")
  .get(authMiddleware, categoryController.show)
  .put(
    authMiddleware,
    checkSchema(categorySchema.update),
    (req, res, next) =>
      customValidationResult(req, res, next, "Category update failed"),
    categoryController.update
  )
  .delete(authMiddleware, categoryController.drop);

module.exports = router;
