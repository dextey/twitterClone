const express = require("express");
const { registerUser, loginUser } = require("../controllers/userControllers");
const authenticate = require("../middleware/auth");
const User = require("../models/userModel");
const router = express.Router();

router.post("/", (req, res) => {
  registerUser(req.body)
    .then((data) => {
      console.log(data);
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/login", (req, res) => {
  loginUser(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json(err));
});
router.get("/getuser", authenticate, async (req, res) => {
  const { _id, user, username, email } = await User.findById(req.user.id);
  res.json({
    id: _id,
    user,
    username,
    email,
  });
});

module.exports = router;
