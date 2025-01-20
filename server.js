require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/database");

const swiggyRestaurantRoutes = require("./src/routes/swiggyRestaurentRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON requests

app.use("/api/v1/swiggy", swiggyRestaurantRoutes);

// Database connection and server start
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  });

  // Axz7K20PmSAwUEda