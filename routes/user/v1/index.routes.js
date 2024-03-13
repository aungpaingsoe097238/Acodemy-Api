const router = require("express").Router();
const courseRoutes = require("./course.routes");
const categoryRoutes = require("./category.routes");
const studentProjectRoutes = require("./studentproject.routes");
const studentReviewRoutes = require("./studentreviews.routes");


router.use("/courses", courseRoutes);
router.use("/categories", categoryRoutes);
router.use("/student-projects", studentProjectRoutes);
router.use("/student-reviews", studentReviewRoutes);


module.exports = router;
