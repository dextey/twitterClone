const express = require("express");
const router = express.Router();

const {
  getPosts,
  addPost,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");

router.get("/", getPosts);

router.post("/", addPost);

router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
