const router = require("express").Router();
//Controllers
const categoryController = require("../../../app/controllers/admin/v1/category.controller");
//Middlewares
const authMiddleware = require("../../../app/middlewares/auth.middleware");

router.get("/", authMiddleware, categoryController.index);
router.post("/", authMiddleware, categoryController.store);
router
  .route("/:id")
  .get(authMiddleware, categoryController.store)
  .put(authMiddleware, categoryController.update)
  .delete(authMiddleware, categoryController.drop);

module.exports = router;
