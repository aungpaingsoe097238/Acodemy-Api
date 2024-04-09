const router = require("express").Router();
const { checkSchema } = require("express-validator");
//Controllers
const ourteammemberController = require("../../../app/controllers/admin/v1/ourteammember.controller");
//Middlewares
const authMiddleware = require("../../../app/middlewares/auth.middleware");
//Schemas
const ourteammemberSchema = require("../../../app/schemas/admin/v1/ourteammember.schema");
//CustomValidationResult
const customValidationResult = require("../../../app/helpers/customValidationResult");
//FileUpload
const { uploadFile } = require("../../../app/helpers/fileUpload");

router.get("/", authMiddleware, ourteammemberController.index);
router.post(
  "/",
  authMiddleware,
  checkSchema(ourteammemberSchema.store),
  (req, res, next) =>
    customValidationResult(req, res, next, "Team member create failed"),
  (req, res, next) => uploadFile(req, res, next, "team_members"),
  ourteammemberController.store
);
router
  .route("/:id")
  .get(authMiddleware, ourteammemberController.show)
  .post(
    authMiddleware,
    checkSchema(ourteammemberSchema.update),
    (req, res, next) =>
      customValidationResult(req, res, next, "Category update failed"),
    (req, res, next) => uploadFile(req, res, next, "team_members"),
    ourteammemberController.update
  )
  .delete(authMiddleware, ourteammemberController.drop);

module.exports = router;
