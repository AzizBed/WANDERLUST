const router = require("express").Router();
const controller = require("../controllers/adminControllers");

router.get(
  "/userList",
  controller.userManagementController.getUsers.getUserList
);
router.get(
  "/user/:id",
  controller.userManagementController.getUsers.getUserById
);

module.exports = router;
