const favouriteBlog = require('../utils/favouriteBlog')

describe('favourite Blog', () => {
    test('For one blog returns the blog',() => {
        const singleBlog = [{
            title: 'helo',
            author:'shaura',
            likes:5
        }]
        expect(favouriteBlog(singleBlog)).toEqual(singleBlog[0])
    })
    test('For many blogs returns the blog with highest likes',() => {
        const ManyBlogs = [{
            title: 'helo',
            author:'shaura',
            likes:5
        },
        {
            title: 'helo1',
            author:'shaura',
            likes:7
        },
        {
            title: 'helo2',
            author:'shaura',
            likes:8
        },
        ]
        expect(favouriteBlog(ManyBlogs)).toEqual(ManyBlogs[2])
    })
})