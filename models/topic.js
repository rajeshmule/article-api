const { Schema, model } = require("mongoose");

const topicSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: { type: String },
  },
  { timestamps: true }
);

const Topic = model("Topic", topicSchema);

module.exports = Topic;
