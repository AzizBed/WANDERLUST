const User = require("../model/User");
const { RegisterValidation } = require("../config/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    // Validate the data defore making the user

    const { error } = RegisterValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let { FirstName, LastName, email, password } = req.body;

    // Checking in the user is already in the database
    const emailExist = await User.findOne({ email });
    if (emailExist) return res.status(400).send("email already exists");

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create new user
    const newUser = new User({
        FirstName,
        LastName,
        email,
        password: hashedPassword,
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json({
            message: "user was added successfully",
            savedUser,
        });
    } catch (err) {
        res.status(400).json({ message: err });
    }
};
exports.login = async (req, res) => {
    let { email, password } = req.body;

    // Checking in the email exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("email or password is wrong");

    // Check if password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send("Invalid password");

    // Create and assign a token

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
};
