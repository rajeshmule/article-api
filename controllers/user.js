const User = require("../models/user");
const { isValidUser } = require("../utils/validator");

exports.registerUser = async (req, res, next) => {
  console.log("rU");
  try {
    let newUser = req.body.user;
    if (!newUser) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    if (!isValidUser(newUser)) {
      return res.status(400).json({ message: "Wrong Input" });
    }
    const user = await User.create(newUser);
    res.json({ user });
  } catch (error) {
    next(error);
  }
};
