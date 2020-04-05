const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const initialBlogs = [{
    title:'blog1',
    author:'shaurya1',
    url:'localhost/shaurya1/blog1',
    likes:5
},
{
    title:'blog2',
    author:'shaurya2',
    url:'localhost/shaurya2/blog2',
    likes:7
},
{
    title:'blog3',
    author:'shaurya3',
    url:'localhost/shaurya3/blog3',
    likes:9
}]


beforeEach(async() => {
    jest.setTimeout(20000)
    await Blog.deleteMany({})

    let newBlog = new Blog(initialBlogs[0])
    await newBlog.save()

    newBlog = new Blog(initialBlogs[1])
    await newBlog.save()

    newBlog = new Blog(initialBlogs[2])
    await newBlog.save()

})

test('blogs are returned in json format' , async() => {
    await api.get('/api/blogs')
        .expect(200)
        .expect('Content-Type',/application\/json/)
},30000)

test('id is present as unique identifier', async() => {
    const response = await api.get('/api/blogs')

    expect(response.body[0].id).toBeDefined()
})

afterAll(() => {
    mongoose.connection.close()
})