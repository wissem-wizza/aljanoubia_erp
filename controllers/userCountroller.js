const asyncHandler = require('express-async-handler')

const User = require('../models/UserModel')

const getUser = asyncHandler( async (req,res) => {
    const users = await User.find()
    
    res.status(200).json(users)
})

const setUser = asyncHandler( async (req,res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a username')
    }

    res.status(200).json({msg : 'set user!'})
})

// @desc Update user
// @route PUT /api/user/:id
// @access Private
const updateUser = asyncHandler( async (req,res) => {
    res.status(200).json({msg : `${req.params.id} updated`}
)})

// @desc Delete user
// @route DELETE /api/user/:id
// @access Private
const deleteUser = asyncHandler( async (req,res) => {
    res.status(200).json({msg : `${req.params.id} deleted`}
)})

module.exports = {
    getUser,
    setUser,
    updateUser,
    deleteUser,
}