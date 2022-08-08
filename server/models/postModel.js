const mongoose = require("mongoose");

const postsSchema = mongoose.Schema(
  {
    tweet: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Posts", postsSchema);
