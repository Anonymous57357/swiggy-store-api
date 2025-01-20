const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONOGODB_CONNECTION_STRING,
      {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Database connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("Error connecting to the database:");
    console.error(error.message);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = { connectDB };
