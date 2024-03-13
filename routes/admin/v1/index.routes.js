const router = require("express").Router();
const authRoutes = require("./auth.routes");
const roleRoutes = require("./role.routes");
const permissionRoutes = require("./permission.routes");
const userRoutes = require("./user.routes");
const categoryRoutes = require("./category.routes");
const courseRoutes = require("./course.routes");
const studentProjectRoutes = require("./studentproject.routes");
const studentReviewRoutes = require("./studentreview.routes");

router.use("/auth", authRoutes);
router.use("/roles", roleRoutes);
router.use("/permissions", permissionRoutes);
router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/courses", courseRoutes);
router.use("/student-projects", studentProjectRoutes);
router.use("/student-reviews", studentReviewRoutes);

module.exports = router;
