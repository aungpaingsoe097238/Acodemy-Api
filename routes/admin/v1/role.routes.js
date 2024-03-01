const router = require("express").Router();
//Controllers
const roleController = require("../../../app/controllers/admin/v1/role.controller");
//Middlewares
const authMiddleware = require("../../../app/middlewares/auth.middleware");

router.get("/", authMiddleware, roleController.index);

module.exports = router;