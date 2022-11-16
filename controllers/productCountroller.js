const asyncHandler = require('express-async-handler')

const Product = require('../models/productModel')

const getProduct = asyncHandler( async (req,res) => {
    const products = await Product.find()
    
    res.status(200).json(products)
})

const setProduct = asyncHandler( async (req,res) => {
    if (!req.body.type) {
        res.status(400)
        throw new Error('Please add a type')
    }
    if (!req.body.title) {
        res.status(400)
        throw new Error('Please add a title')
    }

    const product = await Product.create({
        type  : req.body.type,
        title : req.body.title,
    })

    res.status(200).json(product)
})

// @desc Update Product
// @route PUT /api/product/:id
// @access Private
const updateProduct = asyncHandler( async (req,res) => {
    const product = await Product.findById(req.params.id)

    if(!product){
        res.status(400)
        throw new Error('Product not found')
    }

    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
    })

    res.status(200).json(updateProduct)
})

// @desc Delete Product
// @route DELETE /api/product/:id
// @access Private
const deleteProduct = asyncHandler( async (req,res) => {
    const product = await Product.findById(req.params.id)

    if(!product){
        res.status(400)
        throw new Error('Product not found')
    }
    
    await product.remove()

    res.status(200).json({id : req.params.id})
})

module.exports = {
    getProduct,
    setProduct,
    updateProduct,
    deleteProduct,
}