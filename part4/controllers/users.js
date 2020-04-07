const userRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

userRouter.post('/', async (request,response) => {
    const body = request.body

    if(body.userName === undefined || body.password === undefined){
        return response.status(400).json({
            err: 'Username and password cannot be empty'
        })
    }

    if(body.userName.length < 3 || body.password.length <3 ){
        return response.status(400).json({
            err:'userrname and password must be more than 3 digit long'
        })
    }
    const saltRounds = 10
    const hashedPass = await bcrypt.hash(body.password, saltRounds)

    const newUser = new User({
        userName: body.userName,
        name:body.name,
        passwordHash: hashedPass,
        blogs:body.blogs
    })

    const savedUser = await newUser.save()
    response.json(savedUser.toJSON())

})

userRouter.get('/', async (request,response) => {
    const users = await User.find({}).populate('blogs')

    response.json(users).status(200)
})

module.exports = userRouter