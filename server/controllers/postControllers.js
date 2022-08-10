const Posts = require("../models/postModel");
const User = require("../models/userModel");

module.exports = {
  getPosts: () => {
    return new Promise(async (resolve, reject) => {
      const posts = await Posts.find();
      resolve(posts);
    });
  },

  addPost: (tweet, id) => {
    return new Promise(async (resolve, reject) => {
      const post = await Posts.create({
        tweet: tweet,
        user: id,
      });
      resolve(post);
    });
  },

  updatePost: (id, data, userId) => {
    return new Promise(async (resolve, reject) => {
      const post = await Posts.findById(id);
      if (!post) {
        throw new Error("Post not found");
      }
      const user = User.findById(userId);
      if (!user) {
        reject("User not found");
      }

      if (post.user.toString() !== userId) {
        reject("User not authorized");
      }

      const updatedPost = await Posts.findByIdAndUpdate(id, data, {
        new: true,
      });
      console.log(id, data);
      // The third argument new:true when assigned will create a new post if it does exists
      resolve(updatedPost);
    });
  },

  deletePost: (id, userId) => {
    return new Promise(async (resolve, reject) => {
      const post = await Posts.findById(id);
      if (!post) {
        throw new Error("Post not found");
      }
      const user = User.findById(userId);
      if (!user) {
        reject("User not found");
      }

      if (post.user.toString() !== userId) {
        throw new Error("User not authorized");
      }
      await post.remove();
      resolve(id);
    });
  },
};
