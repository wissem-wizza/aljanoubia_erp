const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Please add a value']
    }
},{
    timestamp: true
})

module.exports = mongoose.model('User',UserSchema)