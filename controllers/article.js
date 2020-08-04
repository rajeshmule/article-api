const Article = require("../models/article");
const Topic = require("../models/topic");

exports.createArticle = async (req, res, next) => {
  try {
    const url = req.protocol + "://" + req.get("host");

    const imageUrl = url + /uploads/ + req.file.filename;

    if (req.admin) {
      if (!req.body.topicId) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
      const topic = await Topic.findById(req.body.topicId);
      if (!topic) {
        return res.status(404).json({ message: "topic doesnt exist in db" });
      }
      const article = await Article.create({
        title: req.body.title,
        image: imageUrl,
        content: req.body.content,
        topicId: req.body.topicId,
      });
      topic.articles.push(article._id);

      res.json({ article });
    } else {
      res.status(400).json({ message: "you are not create a article." });
    }
  } catch (error) {
    next(error);
  }
};

exports.updateArticle = async (req, res, next) => {
  try {
    var articleId = req.params.id;

    const url = req.protocol + "://" + req.get("host");

    const imageUrl = url + /uploads/ + req.file.filename;

    if (req.admin) {
      if (!req.body.topicId) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      const article = await Article.findByIdAndUpdate(
        articleId,
        {
          title: req.body.title,
          image: imageUrl,
          content: req.body.content,
          topicId: req.body.topicId,
        },
        { new: true }
      );

      res.json({ article });
    } else {
      res.status(400).json({ message: "you are not create a article." });
    }
  } catch (error) {
    next(error);
  }
};
