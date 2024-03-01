const router = require("express").Router();
const courseRoutes = require("./course.routes");
const categoryRoutes = require("./category.routes");

router.use("/courses", courseRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
