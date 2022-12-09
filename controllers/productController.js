const asyncHandler = require("express-async-handler");
const { type } = require("express/lib/response");

const Product = require("../models/productModel");
// const User = require('../models/userModel')

// @desc    Get products
// @route   GET /api/products
// @access  Private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find(); //{ user: req.user.id }

  res.status(200).json(products);
});

// @desc    Set product
// @route   POST /api/products
// @access  Private
const setProduct = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Veuillez ajouter un nom pour le produit");
  }
  if (!req.body.type) {
    req.body.type = undefined;
  }
  if (!req.body.quantity) {
    res.status(400);
    throw new Error("Veuillez ajouter une quantitée pour ce produit");
  }
  if (!req.body.price) {
    res.status(400);
    throw new Error("Veuillez ajouter un prix pour ce produit");
  }
  console.log(req.body);

  const product = await Product.create({
    name: req.body.name,
    type: req.body.type,
    quantity: req.body.quantity,
    price: req.body.price,
  });

  res.status(200).json(product);
});

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("produit non trouvé");
  }

  // Check for fields

  if (!req.body.name) {
    res.status(400);
    throw new Error("Veuillez ajouter un nom pour le produit");
  }
  if (!req.body.quantity) {
    res.status(400);
    throw new Error("Veuillez ajouter une quantitée pour ce produit");
  }
  if (!req.body.price) {
    res.status(400);
    throw new Error("Veuillez ajouter un prix pour ce produit");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedProduct);
});

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }

  await product.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
};
