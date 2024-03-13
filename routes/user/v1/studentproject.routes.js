const router = require("express").Router();
//Controllers
const studentProjectController = require("../../../app/controllers/user/v1/studentproject.controller");

router.get("/", studentProjectController.index);
router.route("/:id").get(studentProjectController.show);

module.exports = router;
