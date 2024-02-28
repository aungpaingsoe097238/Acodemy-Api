const router = require("express").Router();
//Controllers
const courseController = require("../../../app/controllers/admin/v1/course.controller");
//Middlewares
const authMiddleware = require("../../../app/middlewares/auth.middleware");

router.get("/", authMiddleware ,courseController.index);


module.exports = router;