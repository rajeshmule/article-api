const express = require("express");
const router = express.Router();
const auth = require("../../utils/jwtAuth");
const upload = require("../../utils/upload");
const articleController = require("../../controllers/article");

router.post(
  "/",
  auth.validateJwt,
  upload.single("image"),
  articleController.createArticle
);
router.put(
  "/:id",
  auth.validateJwt,
  upload.single("image"),
  articleController.updateArticle
);
router.get(
  "/:id",
  auth.allowGuest,
  auth.validateJwt,
  articleController.showArticle
);
module.exports = router;
