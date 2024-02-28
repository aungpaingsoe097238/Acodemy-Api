const router = require("express").Router();
const { checkSchema } = require("express-validator");
//Controllers
const authController = require("../../../app/controllers/admin/v1/auth.controller");
//Schemas
const authSchema = require("../../../app/schemas/admin/v1/auth.schema");

router.post("/login", checkSchema(authSchema.login), authController.login);

module.exports = router;