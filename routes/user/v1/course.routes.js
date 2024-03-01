const router = require("express").Router();
//Controllers
const courseController = require("../../../app/controllers/user/v1/course.controller");

router.get("/", courseController.index);
router.route("/:slug").get(courseController.show);

module.exports = router;
