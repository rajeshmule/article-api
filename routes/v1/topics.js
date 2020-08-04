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
router.get("/", auth.validateJwt, showTopics);
router.get("/:id", auth.validateJwt, showTopic);

module.exports = router;
