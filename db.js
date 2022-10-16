const mongoose = require("mongoose");

module.exports = async function connection() {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION);
    console.log("Connected to database.");
  } catch (error) {
    console.log(error, "Could not connect to database.");
  }
};