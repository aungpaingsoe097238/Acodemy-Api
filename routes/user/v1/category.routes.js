const router = require("express").Router();
//Controllers
const categoryController = require("../../../app/controllers/user/v1/category.controller");

router.get("/", categoryController.index);
router.route("/:id").get(categoryController.show);

module.exports = router;
