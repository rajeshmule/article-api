const User = require("../models/user");
const { isValidUser } = require("../utils/validator");
const auth = require("../utils/jwtAuth");

exports.registerUser = async (req, res, next) => {
  try {
    let newUser = req.body.user;
    if (!newUser) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    if (!isValidUser(newUser)) {
      return res.status(400).json({ message: "Wrong Input" });
    }
    const user = await User.create(newUser);
    res.json({ user: user.format() });
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    var { user } = req.body;
    if (!user || !user.email || !user.password) {
      return res.status(400).json({ message: "Wrong Input" });
    }
    var currentUser = await User.findOne({ email: user.email });
    if (!currentUser) {
      return res.status(404).json({ message: "Invalid email address" });
    }
    var isPasswordMatch = await currentUser.verifyPassword(user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    var token = await auth.generateJwt(currentUser, next);
    res.json({ user: currentUser.format(), token });
  } catch (error) {
    next(error);
  }
};

exports.registerUserAsAdmin = async (req, res, next) => {
  try {
    let newAdminUser = req.body.user;
    if (!newAdminUser) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    if (!isValidUser(newAdminUser)) {
      return res.status(400).json({ message: "Wrong Input" });
    }
    newAdminUser.isAdmin = true;
    const user = await User.create(newAdminUser);
    res.json({ user: user.format() });
  } catch (error) {
    next(error);
  }
};
