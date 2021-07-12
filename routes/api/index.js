const router = require('express').Router();
const controllers = require('../../controllers')

// Manage USER Profil
router.get("/UserInfos", controllers.userControllers.read.ReadUser);
router.post("/addUserInfos/:id", controllers.userControllers.create.CreateUser);
// router.delete("/deleteUserInfos/:id", controllers.userControllers.delete.DeleteUser);
router.put("/updateUserInfos/:id", controllers.userControllers.update.UpdateUser);

module.exports = router;