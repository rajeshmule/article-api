const Topic = require("../models/topic");

exports.createTopic = async (req, res, next) => {
  try {
    if (req.admin) {
      if (!req.body.name) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
      const topic = await Topic.create({
        name: req.body.name,
        image: req.file.path,
      });
      res.json({ topic: topic });
    } else {
      res.status(400).json({ message: "you are not create a topic." });
    }
  } catch (error) {
    next(error);
  }
};
