const express = require('express')
const router = express.Router()
const {
  getBills,
  setBill,
  updateBill,
  deleteBill,
} = require('../controllers/billCountroller')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getBills).post(protect, setBill)
router.route('/:id').delete(protect, deleteBill).put(protect, updateBill)

module.exports = router