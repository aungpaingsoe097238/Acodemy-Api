const router = require("express").Router();
//Controllers
const courseController = require("../../../app/controllers/admin/v1/course.controller");
//Middlewares
const authMiddleware = require("../../../app/middlewares/auth.middleware");

router.get("/", authMiddleware, courseController.index);
router.post("/", authMiddleware, courseController.store);
router
  .route("/:id")
  .get(authMiddleware, courseController.store)
  .put(authMiddleware, courseController.update)
  .delete(authMiddleware, courseController.drop);

module.exports = router;
