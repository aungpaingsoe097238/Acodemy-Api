const router = require("express").Router();
const authController = require("../../../controllers/admin/v1/auth.controller");

router.post("/login", authController.login);

module.exports = router;