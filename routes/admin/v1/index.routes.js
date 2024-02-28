const router = require("express").Router();
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const categoryRoutes = require("./category.routes");
const courseRoutes = require("./course.routes");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/courses", courseRoutes);

module.exports = router;
