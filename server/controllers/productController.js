const Product = require("../models/productModel");

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create new product
const createProduct = async (req, res) => {
  const {
    name,
    description,
    specification,
    type,
    quantity,
    rating,
    reviews,
    release_date,
  } = req.body;

  try {
    const product = new Product({
      name,
      description,
      specification,
      type,
      quantity,
      rating,
      reviews,
      release_date,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAllProducts, createProduct };
