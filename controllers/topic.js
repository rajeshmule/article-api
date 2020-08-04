const Topic = require("../models/topic");

exports.createTopic = async (req, res, next) => {
  try {
    const imageUrl = url + /uploads/ + req.file.filename;
    if (req.admin) {
      if (!req.body.name) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
      const topic = await Topic.create({
        name: req.body.name,
        image: imageUrl,
      });
      res.json({ topic: topic });
    } else {
      res.status(400).json({ message: "you are not create a topic." });
    }
  } catch (error) {
    next(error);
  }
};

exports.showTopics = async (req, res, next) => {
  try {
    const topics = await Topic.find({});
    res.json({ topics });
  } catch (error) {
    next(error);
  }
};

exports.showTopic = async (req, res, next) => {
  try {
    const topic = await Topic.findById(req.params.id);
    res.json({ topic });
  } catch (error) {
    next(error);
  }
};
