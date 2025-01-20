const mongoose = require("mongoose");

const swiggyRestaurantSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    cuisines: {
      type: [String],
      required: true,
    },
    avgRating: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    delivery_time: {
      type: Number,
      required: true,
    },
    costForTwo: {
      type: Number,
      required: true,
    },
    promoted: {
      type: Boolean,
      default: false,
    },
    menu: [
      {
        category: { 
          type: String, // Accordion Header
          required: true,
        },
        items: [
          {
            name: {
              type: String, // Item name
              required: true,
            },
            price: {
              type: Number, // Item price
              required: true,
            },
            description: {
              type: String, // Optional item description
              default: "",
            },
            isVegetarian: {
              type: Boolean, // Whether the item is vegetarian
              default: false,
            },
            image: {
              type: String, // Optional image URL for the item
              default: "",
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Create the Mongoose model
const SwiggyRestaurant = mongoose.model(
  "SwiggyRestaurant",
  swiggyRestaurantSchema
);

// Export the model
module.exports = SwiggyRestaurant;
