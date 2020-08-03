const express = require("express");
const auth = require("../../utils/jwtAuth");
const { createTopic } = require("../../controllers/topic");
const upload = require("../../utils/upload");

const router = express.Router();

router.post("/", auth.validateJwt, upload.single("topicImage"), createTopic);

module.exports = router;
