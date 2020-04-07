const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')


mongoose.set('useCreateIndex', true)

const userSchema = mongoose.Schema({
    name: String,
    userName: {
        type:String,
        unique:true
    },
    passwordHash: String,
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog'
        }
    ]
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User',userSchema)

userSchema.set('toJSON', {
    transform: (document,returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

module.exports = User