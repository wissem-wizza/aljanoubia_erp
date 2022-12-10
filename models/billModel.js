const mongoose = require("mongoose");

const billSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    date: {
      type: Date,
      required: true,
    },
    product: {
      type: String,
      required: [true, "Veuillez ajouter un produit"],
      // ref: "Product",
    },
    payment: {
      type: String,
      required: [true, "Veuillez préciser le mode de paiement"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bill", billSchema);
