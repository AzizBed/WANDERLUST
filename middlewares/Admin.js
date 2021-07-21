//Admin Access

const User = require("../model/User");
const adminAccess = async (req, res) => {
  try {
    const admin = await User.findOne({ isAdmin: req.user.isAdmin });
    if (admin.isAdmin === false) {
      return res.status(403).json({ msg: "access denied !" });
    }
    res.send("access granted !");
  } catch {
    if (err) throw err;
    return res.send(err);
  }
};
module.exports = adminAccess;
