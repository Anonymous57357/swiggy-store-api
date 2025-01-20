const express = require("express");
const swiggyRestaurentRouter = express.Router();
const {
  getAllRestaurants,
  createRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/swiggyRestaurentController");

swiggyRestaurentRouter.get("/restaurants", getAllRestaurants);
swiggyRestaurentRouter.get("/restaurants/:id", getRestaurantById);
swiggyRestaurentRouter.post("/restaurants", createRestaurant);
swiggyRestaurentRouter.put("/restaurants/:id", updateRestaurant);
swiggyRestaurentRouter.delete("/restaurants/:id", deleteRestaurant);

module.exports = swiggyRestaurentRouter;
