const express = require("express");
const auth = require("../../utils/jwtAuth");
const {
  createTopic,
  showTopics,
  showTopic,
} = require("../../controllers/topic");
const upload = require("../../utils/upload");

const router = express.Router();

router.post("/", auth.validateJwt, upload.single("image"), createTopic);
router.get("/", showTopics);
router.get("/:id", showTopic);

module.exports = router;
