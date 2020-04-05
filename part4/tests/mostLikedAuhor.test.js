const mostLikedAuthor = require('../utils/mostLikedAuthor')

describe('favourite Blog', () => {
    test('For one blog returns the blog',() => {
        const singleBlog = [{
            title: 'helo',
            author:'shaura',
            likes:5
        }]
        expect(mostLikedAuthor(singleBlog)).toEqual({
            author:'shaura',
            likes:5
        })
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
        expect(mostLikedAuthor(ManyBlogs)).toEqual({
            author:'shaura',
            likes:20
        })
    })
})