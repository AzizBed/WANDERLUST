const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
require("dotenv").config();
// Middlewares
app.use(express.json());

// Connect to database
connectDB;
// Routes Middlewares
// Register or Login User
app.use("/api/user", require("./routes/user"));
// Manage user profil
app.use("/api/profil", require("./routes/api"));

app.use('/api/posts', require('./routes/posts'))

// Start the server
app.listen(process.env.PORT, () => {
    console.log("Server up and Running");
});
