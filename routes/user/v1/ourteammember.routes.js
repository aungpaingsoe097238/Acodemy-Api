const router = require("express").Router();
//Controllers
const ourteammemberController = require("../../../app/controllers/user/v1/ourteammember.controller");

router.get("/", ourteammemberController.index);
router.route("/:id").get(ourteammemberController.show);

module.exports = router;
