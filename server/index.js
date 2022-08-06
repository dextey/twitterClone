const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const methodOverride = require("method-override");

const PORT = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(methodOverride());

const postsRoutes = require("./routes/postsRoutes");

app.use("/api/posts/", postsRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening at port : ${PORT}`);
});
