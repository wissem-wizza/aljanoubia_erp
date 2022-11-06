const asyncHandler = require('express-async-handler')

const User = require('../models/UserModel')

const getUser = asyncHandler( async (req,res) => {
    const users = await User.find()
    
    res.status(200).json(users)
})

const setUser = asyncHandler( async (req,res) => {
    if (!req.body.username) {
        res.status(400)
        throw new Error('Please add a username')
    }

    const user = await User.create({
        username : req.body.username,
    })

    res.status(200).json(user)
})

// @desc Update user
// @route PUT /api/user/:id
// @access Private
const updateUser = asyncHandler( async (req,res) => {
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User not found')
    }

    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
    })

    res.status(200).json(updateUser)
})

// @desc Delete user
// @route DELETE /api/user/:id
// @access Private
const deleteUser = asyncHandler( async (req,res) => {
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User not found')
    }
    
    await user.remove()

    res.status(200).json({id : req.params.id})
})

module.exports = {
    getUser,
    setUser,
    updateUser,
    deleteUser,
}