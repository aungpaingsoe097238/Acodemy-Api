const router = require("express").Router();
const { checkSchema } = require("express-validator");
//Controllers
const authController = require("../../../app/controllers/admin/v1/auth.controller");
//Schemas
const authSchema = require("../../../app/schemas/admin/v1/auth.schema");
//CustomValidationResult
const customValidationResult = require("../../../app/helpers/customValidationResult");

router.post("/login", checkSchema(authSchema.login), (req, res, next) => customValidationResult(req, res, next, "Invalid credential"), authController.login);

module.exports = router;