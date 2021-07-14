const router = require("express").Router();
const { register, login } = require("../middlewares/auth");
const User = require("../model/User");

// REGISTER
router.post("/register", register);

// LOGIN
router.post("/login", login);

// EDIT LOGIN INFORMATIONS
router.put("/editLoginInformations/:id", async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params;
        let newLoginInformation = await User.findByIdAndUpdate(id, {
            $set: { ...body },
        });
        res.status(201).json({
            message: "login informations were updated successfully",
            newLoginInformation,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
