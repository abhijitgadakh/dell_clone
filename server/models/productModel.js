const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  specification: { type: String, required: true },
  type: {
    type: String,
    enum: ["laptop", "laptop_accessories"],
    required: true,
  },
  quantity: { type: Number, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  reviews: { type: Number, default: 0 },
  release_date: { type: Date, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
