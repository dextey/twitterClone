module.exports = {
  // Retreving posts from database
  getPosts: (req, res) => {
    res.send("listing posts");
  },
  //Add post to database
  addPost: (req, res) => {
    if (!req.body.tweet) {
      res.status(400);
      throw new Error("Please add a tweet");
    } else {
      res.send("adding posts");
    }
  },
  updatePost: (req, res) => {
    res.send("updating posts");
  },
  deletePost: (req, res) => {
    res.send("deleteing post");
  },
};
