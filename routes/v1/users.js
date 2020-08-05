const express = require("express");
const userController = require("../../controllers/user");
const router = express.Router();

router.post("/", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/admin", userController.registerUserAsAdmin);

module.exports = router;
