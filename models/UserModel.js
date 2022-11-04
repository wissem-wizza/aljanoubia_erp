const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    text: {
        type: String,
        require: [true, 'Please add a value']
    }
},{
    timestamp: true
})

module.exports = mongoose.model('User',UserSchema)