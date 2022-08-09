const Posts = require("../models/postModel");

module.exports = {
  // Retreving posts from database
  // getPosts: async (req, res) => {
  //   const posts = await Posts.find();
  //   res.send(posts);
  // },
  //Add post to database
  addPost: async (req, res) => {
    if (!req.body.tweet) {
      console.log(req.body);
      // res.status(404);
      throw new Error("Error occured");
    }
    const post = await Posts.create({
      tweet: req.body.tweet,
    });
    res.json(post);
  },
  // updatePost: async (req, res) => {
  //   try {
  //     const post = await Posts.findById(req.params.id);
  //   } catch (error) {
  //     res.status(400);
  //     throw new Error("Post not found");
  //   }

  //   const updatedPost = await Posts.findByIdAndUpdate(req.params.id, req.body, {
  //     new: true,
  //   });
  //   // The third argument new:true when assigned will create a new post if it does exists
  //   res.status(201).json(updatedPost);
  // },
  // deletePost: async (req, res) => {
  //   const post = await Posts.findById(req.params.id);
  //   if (!post) {
  //     res.status(400);
  //     throw new Error("Post not found");
  //   }
  //   await post.remove();
  //   res.status(200).json({ id: req.params.id });
  // },
};
