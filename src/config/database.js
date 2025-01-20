const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONOGODB_CONNECTION_STRING,
      {
        dbName: process.env.DB_NAME,
      }
    );
    console.log("database connection successful");
  } catch (error) {
    console.log(error);
    console.error("Error connecting to database ");
  }
};

module.exports = { connectDB };
