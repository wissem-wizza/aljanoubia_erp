const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    type: {
        type: String,
        require: [true, 'Please add a type for this product']
    },
    title: {
        type: String,
        require: [true, 'Please add a title for this product']
    }
    // username: {
    //     type: String,
    //     require: [true, 'Please add a username']
    // },
    // email: {
    //     type: String,
    //     require: [true, 'Please add an email'],
    //     unique: true
    // },
    // password: {
    //     type: String,
    //     require: [true, 'Please add a password']
    // }
},{
    timestamp: true
})

module.exports = mongoose.model('Product',productSchema)