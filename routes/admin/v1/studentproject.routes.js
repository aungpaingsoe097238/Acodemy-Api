const router = require("express").Router();
const { checkSchema } = require("express-validator");
//Controllers
const studentProjectController = require("../../../app/controllers/admin/v1/studentproject.controller");
//Middlewares
const authMiddleware = require("../../../app/middlewares/auth.middleware");
//Schemas
const studentProjectSchema = require("../../../app/schemas/admin/v1/studentproject.schmea");
//CustomValidationResult
const customValidationResult = require("../../../app/helpers/customValidationResult");
//FileUpload
const { uploadFile } = require("../../../app/helpers/fileUpload");

router.get("/", authMiddleware, studentProjectController.index);
router.post(
  "/",
  authMiddleware,
  checkSchema(studentProjectSchema.store),
  (req, res, next) =>
    customValidationResult(req, res, next, "Student project create failed"),
  (req, res, next) => uploadFile(req, res, next, "student_project"),
  studentProjectController.store
);
router
  .route("/:id")
  .get(authMiddleware, studentProjectController.show)
  .post(
    authMiddleware,
    checkSchema(studentProjectSchema.update),
    (req, res, next) =>
      customValidationResult(req, res, next, "Student project update failed"),
    (req, res, next) => uploadFile(req, res, next, "student_project"),
    studentProjectController.update
  )
  .delete(authMiddleware, studentProjectController.drop);

module.exports = router;
