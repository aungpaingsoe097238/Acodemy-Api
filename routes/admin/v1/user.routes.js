const router = require("express").Router();
//Controllers
const userController = require("../../../app/controllers/admin/v1/user.controller");
//Middlewares
const authMiddleware = require("../../../app/middlewares/auth.middleware");

router.get("/", authMiddleware ,userController.index);

module.exports = router;