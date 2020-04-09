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
        likes:5,
        User:'5e8fa04c1c9d440000c0dd0c'
    },
    {
        title:'blog2',
        author:'shaurya2',
        url:'localhost/shaurya2/blog2',
        likes:7,
        User:'5e8fa04c1c9d440000c0dd0c'
    },
    {
        title:'blog3',
        author:'shaurya3',
        url:'localhost/shaurya3/blog3',
        likes:9,
        User:'5e8fa04c1c9d440000c0dd0c'
    }]

    let token = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ild1bGZvcnIiLCJpZCI6IjVlOGNlNjZjMzIxZjQ2Njk5MjI3MDUxMiIsImlhdCI6MTU4NjM4ODU3Nn0.q0G5kdmzcHuv92G7gQOSaG7L6iUHWrajj3OUv9Ui3qQ'

    beforeAll( async() => {
        const loginDetails = {
            userName: 'Wulforr',
            password:'mypasswordisstrong'
        }
        const user = await api.post('/user/login')
            .send(loginDetails)
        console.log('user',user.body)
        token = 'bearer ' + user.token
    })

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
            likes:5,
            UserId: '5e8c907aba794059b0ca2ac2'
        }
        await api.post('/api/blogs')
            .send(newBlog)
            .set({ Authorization: token })
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
            .set({ Authorization: token })
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
            .set({ Authorization: token })
            .expect(400)
            // .expect('Content-Type',/application\/json/)

        const response = await api.get('/api/blogs')
        expect(response.body).toHaveLength(initialBlogs.length)
    })

    test('if token is not provided it gives 401 error', async () => {
        const newBlog = {
            author:'shaurya',
            url:'asadsqda',
            likes:7,
            title:'wwasf',
            UserId:'5e8c907aba794059b0ca2ac2'
        }

        await api.post('/api/blogs')
            .send(newBlog)
            .expect(401)
    })

    afterAll(() => {
        mongoose.connection.close()
    })

})
