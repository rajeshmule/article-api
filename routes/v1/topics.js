const express = require("express");
const auth = require("../../utils/jwtAuth");
const topicController = require("../../controllers/topic");
const upload = require("../../utils/upload");

const router = express.Router();

router.post(
  "/",
  auth.validateJwt,
  upload.single("image"),
  topicController.createTopic
);
router.get("/", topicController.showTopics);
router.get("/:id", topicController.showTopic);

module.exports = router;
