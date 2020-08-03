const express = require("express");
const {
  registerUser,
  loginUser,
  registerUserAsAdmin,
} = require("../../controllers/user");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/admin", registerUserAsAdmin);

module.exports = router;
