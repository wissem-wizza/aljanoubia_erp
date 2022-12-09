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
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Merci d'ajouter un produit"],
      ref: "Product",
    },
    mode_reglement: {
      type: String,
      required: [true, "Veuillez préciser le mode de paiement"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bill", billSchema);
