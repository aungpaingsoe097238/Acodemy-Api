const router = require("express").Router();
//Controllers
const permissionController = require("../../../app/controllers/admin/v1/permission.controller");
//Middlewares
const authMiddleware = require("../../../app/middlewares/auth.middleware");

router.get("/", authMiddleware, permissionController.index);

module.exports = router;