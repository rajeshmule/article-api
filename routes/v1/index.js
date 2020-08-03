const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const topicRouter = require("./topics");

router.use("/users", usersRouter);
router.use("/topics", topicRouter);

module.exports = router;
