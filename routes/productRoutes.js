const express = require('express')
const router = express.Router()
const { getProduct, setProduct, updateProduct, deleteProduct} = require('../controllers/productCountroller')


router.get('/', getProduct)
router.post('/',setProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

// router.route('/').get(getUser).post(setUser)
// router.route('/:id').put(updateUser).delete(deleteUser)

module.exports = router