const { Schema, model } = require("mongoose");

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    topicId: {
      type: Schema.Types.ObjectId,
      ref: "Topic",
    },
  },
  { timestamps: true }
);

const Article = model("Article", articleSchema);

module.exports = Article;
