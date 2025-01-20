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
    console.error("Error conneciton to database ");
  }
};

module.exports = { connectDB };
