const express = require("express");
const router = express.Router();
const auth = require("../../utils/jwtAuth");
const upload = require("../../utils/upload");
const { createArticle, updateArticle } = require("../../controllers/article");

router.post("/", auth.validateJwt, upload.single("image"), createArticle);
router.put("/:id", auth.validateJwt, upload.single("image"), updateArticle);

module.exports = router;
