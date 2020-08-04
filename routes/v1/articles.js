const express = require("express");
const router = express.Router();
const auth = require("../../utils/jwtAuth");
const upload = require("../../utils/upload");
const { createArticle } = require("../../controllers/article");

router.post("/", auth.validateJwt, upload.single("image"), createArticle);

module.exports = router;
