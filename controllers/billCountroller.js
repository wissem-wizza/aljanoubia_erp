const asyncHandler = require("express-async-handler");

const Bill = require("../models/billModel");
const User = require("../models/userModel");

// @desc    Get bills
// @route   GET /api/bills
// @access  Private
const getBills = asyncHandler(async (req, res) => {
  const bills = await Bill.find({ user: req.user.id });

  res.status(200).json(bills);
});

// @desc    Set bill
// @route   POST /api/bills
// @access  Private
const setBill = asyncHandler(async (req, res) => {
  if (!req.body.payment) {
    res.status(400);
    throw new Error("Veuillez préciser le mode de paiement");
  }
  if (!req.body.product) {
    res.status(400);
    throw new Error("Veuillez ajouter un produit");
  }

  const bill = await Bill.create({
    payment: req.body.payment,
    product: req.body.product,
    date: req.body.date,
    user: req.user.id,
  });

  res.status(200).json(bill);
});

// @desc    Update bill
// @route   PUT /api/bills/:id
// @access  Private
const updateBill = asyncHandler(async (req, res) => {
  const bill = await Bill.findById(req.params.id);

  if (!bill) {
    res.status(400);
    throw new Error("Bill not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the bill user
  if (bill.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedBill = await Bill.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedBill);
});

// @desc    Delete bill
// @route   DELETE /api/bills/:id
// @access  Private
const deleteBill = asyncHandler(async (req, res) => {
  const bill = await Bill.findById(req.params.id);

  if (!bill) {
    res.status(400);
    throw new Error("Bill not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the bill user
  if (bill.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await bill.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBills,
  setBill,
  updateBill,
  deleteBill,
};
