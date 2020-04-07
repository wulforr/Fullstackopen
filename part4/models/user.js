const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    userName: String,
    passwordHash: String,
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog'
        }
    ]
})

const User = mongoose.model('User',userSchema)

userSchema.set('toJSON', {
    transform: (document,returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = User