const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const colors = require("colors");

const PORT = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/db");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const postsRoutes = require("./routes/postsRoutes");

app.use("/api/posts/", postsRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening at port : ${PORT}`);
  console.log("Connecting to Database : ");
  connectDb();
});
