const router = require("express").Router();
const { register, login } = require("../middlewares/auth");

// REGISTER
router.post("/register", register);

// LOGIN
router.post("/login", login);

module.exports = router;
