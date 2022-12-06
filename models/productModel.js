const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    type: {
      type: String,
      default: 'spots publicitaires',
      unique: true
    },
    quantity: {
      type: Number,
      required: [true, 'Please add a quantity'],
    },
    price: {
      type: Number,
      required: [true, 'Please add a price value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Product', productSchema)