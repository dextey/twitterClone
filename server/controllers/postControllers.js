const Posts = require("../models/postModel");

module.exports = {
  // Retreving posts from database
  getPosts: async (req, res) => {
    const posts = await Posts.find();
    res.send(posts);
  },
  //Add post to database
  addPost: async (req, res) => {
    if (!req.body.tweet) {
      res.status(400);
      throw new Error("Please add a tweet");
    } else {
      const post = await Posts.create({
        tweet: req.body.tweet,
      });
      res.json(post);
    }
  },
  updatePost: (req, res) => {
    res.send("updating posts");
  },
  deletePost: (req, res) => {
    res.send("deleteing post");
  },
};
