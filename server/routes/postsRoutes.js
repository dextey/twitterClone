const express = require("express");
const router = express.Router();

// const {
//   getPosts,
//   addPost,
//   updatePost,
//   deletePost,
// } = require("../controllers/postControllers");

// router.get("/", getPosts);

router.post("/", (req, res) => {
  if (!req.body.tweet) {
    console.log(req.body);
    // res.status(404);
    throw new Error("Error occured");
  }
  // const post = await Posts.create({
  //   tweet: req.body.tweet,
  // });
  res.json("post");
});

// router.put("/:id", updatePost);
// router.delete("/:id", deletePost);

module.exports = router;
