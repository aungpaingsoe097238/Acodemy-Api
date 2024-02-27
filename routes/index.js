const router = require("express").Router();
const adminV1Routes = require("./admin/v1/index.routes");

/**
 * version 1 routes
 */
router.use("/admin/v1", adminV1Routes);

module.exports = router;