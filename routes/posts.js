const router = require("express").Router();
const verify = require("../middlewares/verifyToken");
const User = require("../model/User");
const Post = require("../model/Posts");

router.post("/addnewpost/:id", async (req, res) => {
    let { destination, check_in, check_out, nbreOfGuests, description } =
        req.body;
    let { id } = req.params;
    try {
        const user = await User.findById(id);
        const newPost = new Post({
            user: user.id,
            firstName: user.FirstName,
            lastName: user.LastName,
            destination,
            check_in,
            check_out,
            nbreOfGuests,
            description,
        });
        const post = await newPost.save();
        res.status(201).json({ message: "post was added successfully", post });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
