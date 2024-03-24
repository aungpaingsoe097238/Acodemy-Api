const router = require("express").Router();
const { checkSchema } = require("express-validator");
//Controllers
const studentReviewController = require("../../../app/controllers/admin/v1/studentreview.controller");
//Middlewares
const authMiddleware = require("../../../app/middlewares/auth.middleware");
//Schemas
const studentReviewSchema = require("../../../app/schemas/admin/v1/studentreview.schema");
//CustomValidationResult
const customValidationResult = require("../../../app/helpers/customValidationResult");
//FileUpload
const { uploadFile } = require("../../../app/helpers/fileUpload");

router.get("/", authMiddleware, studentReviewController.index);
router.post(
  "/",
  authMiddleware,
  checkSchema(studentReviewSchema.store),
  (req, res, next) =>
    customValidationResult(req, res, next, "Student project create failed"),
  (req, res, next) => uploadFile(req, res, next, "student_project"),
  studentReviewController.store
);
router
  .route("/:id")
  .get(authMiddleware, studentReviewController.show)
  .post(
    authMiddleware,
    (req, res, next) =>
      customValidationResult(req, res, next, "Student project update failed"),
    (req, res, next) => uploadFile(req, res, next, "student_review"),
    studentReviewController.update
  )
  .delete(authMiddleware, studentReviewController.drop);

module.exports = router;
