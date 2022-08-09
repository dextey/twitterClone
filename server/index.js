const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const colors = require("colors");

const PORT = process.env.PORT || 5000;

const connectDb = require("./config/db");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const postsRoutes = require("./routes/postsRoutes");
app.use("/api/posts/", postsRoutes);

app.use((err, req, res, next) => {
  console.log("Error handling middleware called.");
  console.log("Path:", req.path);
  res.send({
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at port : ${PORT}`);
  console.log("Connecting to Database : ");
  connectDb();
});
