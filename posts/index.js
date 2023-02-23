const express = require("express");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();

app.use(cors());
app.use(express.json());

const posts = {};

app.get("/", (req, res) => {
  res.status(200).send(posts);
});
app.post("/", (req, res) => {
  const data = req.body;
  const id = randomBytes(7).toString("hex");
  posts[id] = { id: id, content: data.content };
  res.status(201).send();
});

app.listen(4000, () => {
  console.log("Tweets Service listening at PORT : 4000 ");
});
