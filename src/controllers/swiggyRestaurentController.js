const SwiggyRestaurant = require("../models/swiggyRestaurant");
const mongoose = require("mongoose");

// Controller functions
const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await SwiggyRestaurant.find();
    res.status(200).json({ status: true, data: restaurants });
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurants", error });
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;
    // Validate and convert to ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid restaurant ID" });
    }
    const restaurant = await SwiggyRestaurant.findById(id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching restaurant", error: error.message });
  }
};

const createRestaurant = async (req, res) => {
  try {
    const newRestaurant = new SwiggyRestaurant(req.body);
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ message: "Error creating restaurant", error });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRestaurant = await SwiggyRestaurant.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json(updatedRestaurant);
  } catch (error) {
    res.status(400).json({ message: "Error updating restaurant", error });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRestaurant = await SwiggyRestaurant.findByIdAndDelete(id);
    if (!deletedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting restaurant", error });
  }
};

module.exports = {
  getAllRestaurants,
  createRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
};
