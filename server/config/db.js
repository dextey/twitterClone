const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(URI);
    console.log(`MongoDB connected : ${conn.connection.host} `.black.bgGreen);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
