const userRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

userRouter.post('/login', async (request,response) => {
    const body = request.body
    const user = await User.findOne({ userName: body.userName })

    const passwordCorrect = user === null ? false : await bcrypt.compare(body.password, user.passwordHash)

    if(!(user && passwordCorrect)){
        return response.status(401).json({
            err: 'Username or password is incorrect'
        })
    }

    const userForToken = {
        userName: user.userName,
        id: user._id
    }
    const token = jwt.sign(userForToken,process.env.SECRET)

    response.status(200).json({
        token,
        userName:user.userName,
        name:user.name
    })
})

module.exports = userRouter