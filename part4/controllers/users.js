const userRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

userRouter.post('/', async (request,response) => {
    console.log('adding user')
    const saltRounds = 10
    const hashedPass = await bcrypt.hash(request.body.password, saltRounds)

    const newUser = new User({
        userName: request.body.username,
        name:request.body.name,
        passwordHash: hashedPass
    })

    const savedUser = await newUser.save()
    response.json(savedUser)

})

module.exports = userRouter