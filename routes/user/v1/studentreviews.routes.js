const router = require("express").Router();
//Controllers
const studentReviewController = require("../../../app/controllers/user/v1/studentreview.controller");

router.get("/", studentReviewController.index);
router.route("/:id").get(studentReviewController.show);

module.exports = router;
