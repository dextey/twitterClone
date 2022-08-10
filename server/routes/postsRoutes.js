const express = require("express");
const router = express.Router();

const {
  addPost,
  getPosts,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");
const authenticate = require("../middleware/auth");

router.get("/", authenticate, (req, res) => {
  getPosts()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => console.log("eror"));
});

router.post("/", authenticate, (req, res) => {
  if (!req.body.tweet) {
    res.status(400);
    throw new Error("Please add a tweet");
  }
  addPost(req.body.tweet, req.user.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw new Error(err.message);
    });
});

router.put("/:id", authenticate, (req, res) => {
  if (!req.body.tweet) {
    res.status(400);
    throw new Error("Please add a tweet");
  }
  updatePost(req.params.id, req.body, req.user.id)
    .then((data) => res.status(201).json(data))
    .catch((err) => {
      throw new Error(err.message);
    });
});

router.delete("/:id", authenticate, (req, res) => {
  deletePost(req.params.id, req.user.id)
    .then((data) => res.status(200).json({ deleted: data }))
    .catch((err) => {
      throw new Error(err.message);
    });
});

module.exports = router;
