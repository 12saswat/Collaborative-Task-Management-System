const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/tejDB").then(() => {
      console.log("> MongoDB connected successfully");
    });
  } catch (err) {
    console.error("Mongoose connect failed", err);
    process.exit(1);
  }
};

module.exports = connectDb;
