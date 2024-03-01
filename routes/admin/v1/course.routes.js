const router = require("express").Router();
const { checkSchema } = require("express-validator");
//Controllers
const courseController = require("../../../app/controllers/admin/v1/course.controller");
//Middlewares
const authMiddleware = require("../../../app/middlewares/auth.middleware");
//Schemas
const courseSchema = require("../../../app/schemas/admin/v1/course.schema");
//CustomValidationResult
const customValidationResult = require("../../../app/helpers/customValidationResult");
//FileUpload
const { uploadFile } = require("../../../app/helpers/fileUpload");

router.get("/", authMiddleware, courseController.index);
router.post(
  "/",
  authMiddleware,
  checkSchema(courseSchema.store),
  (req, res, next) =>
    customValidationResult(req, res, next, "Course create failed"),
  courseController.store
);
router
  .route("/:id")
  .get(authMiddleware, courseController.show)
  .put(
    authMiddleware,
    checkSchema(courseSchema.update),
    (req, res, next) =>
      customValidationResult(req, res, next, "Course update failed"),
    courseController.update
  )
  .delete(authMiddleware, courseController.drop);

module.exports = router;
