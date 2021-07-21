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
// Manage POSTS
app.use("/api/posts", require("./routes/posts"));
// Manage Hosting
app.use("/api/host", require("./routes/hosting"));
//Admin management
app.use("/api/admin", require("./routes/admin"));

// Start the server
app.listen(process.env.PORT, () => {
  console.log("Server up and Running");
});
