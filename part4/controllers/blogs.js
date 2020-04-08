const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')



blogRouter.get('/', (request, response) => {
    Blog
        .find({}).populate('User')
        .then(blogs => {
            response.json(blogs.map(ele => ele.toJSON()))
        })
})

blogRouter.post('/', async (request, response) => {

    if(!request.body.title){
        response.status(400).send('title is missing')
        return
    }

    if(!request.body.author){
        response.status(400).json({
            err:'author is missing'
        })
        return
    }

    const token = request.token
    console.log(token)

    const decodedToken = jwt.verify(token,process.env.SECRET)

    if(!token || !decodedToken.id){
        return response.status(400).json({
            err:'invalid or missing token'
        })
    }

    const user = await User.findById(decodedToken.id)

    console.log(user)

    const newBlog = {
        title: request.body.title,
        author:request.body.author,
        url: request.body.url,
        likes: request.body.likes === undefined ? 0 : request.body.likes,
        User: user._id
    }

    const blog = new Blog(newBlog)

    const res = await blog.save()
    user.blogs = user.blogs.concat(res._id)
    await user.save()
    response.status(201).json(res.toJSON())
})

blogRouter.delete('/:id', async(request,response) => {
    await Blog.findByIdAndDelete(request.params.id)
    response.status(204).send('deleted')
})

blogRouter.put('/:id',async(request,response) => {

    await Blog.findOneAndUpdate({ _id: request.params.id } ,{ $set: { likes:request.body.likes } } )
    response.send('updated successfully').status(200)
})


module.exports = blogRouter