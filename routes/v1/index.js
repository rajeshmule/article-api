const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const topicsRouter = require("./topics");
const articlesRouter = require("./articles");

router.use("/users", usersRouter);
router.use("/topics", topicsRouter);
router.use("/articles", articlesRouter);

module.exports = router;
