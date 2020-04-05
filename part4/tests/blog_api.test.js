const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

describe('apitest',() => {

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
        console.log(response.body)

        expect(response.body[0].id).toBeDefined()
    })

    test('new blog is added successfully',async() => {
        const newBlog = {
            title: 'blog',
            author: 'shaurya',
            url:'localhost/shaurya/blog',
            likes:5
        }
        await api.post('/api/blogs')
            .send(newBlog)
            .expect(201)
            .expect('Content-Type',/application\/json/)

        const response = await api.get('/api/blogs')
        expect(response.body).toHaveLength(initialBlogs.length+1)
    })

    test('if likes is missing then it defaults to 0',async() => {
        const newBlog = {
            title: 'blog',
            author: 'shaurya',
            url:'localhost/shaurya/blog'
        }
        await api.post('/api/blogs')
            .send(newBlog)
            .expect(201)
            .expect('Content-Type',/application\/json/)

        const response = await api.get('/api/blogs')
        expect(response.body[3].likes).toBe(0)
    })

    test('if title is missing then it 400 bad request is sent',async() => {
        const newBlog = {
            author: 'shaurya',
            url:'localhost/shaurya/blog',
            likes:5
        }

        await api.post('/api/blogs')
            .send(newBlog)
            .expect(400)
            // .expect('Content-Type',/application\/json/)

        const response = await api.get('/api/blogs')
        expect(response.body).toHaveLength(initialBlogs.length)
    })

    afterAll(() => {
        mongoose.connection.close()
    })

})
