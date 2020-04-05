const mostBlogs = require('../utils/mostBlogs')

describe('favourite Blog', () => {
    test('For one blog returns the blog',() => {
        const singleBlog = [{
            title: 'helo',
            author:'shaura',
            likes:5
        }]
        expect(mostBlogs(singleBlog)).toEqual({
            author:'shaura',
            blogs:1
        })
    })
    test('For many blogs returns the right answer',() => {
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
            author:'shaura1',
            likes:8
        },
        {
            title: 'helo3',
            author:'shaura1',
            likes:8
        },
        {
            title: 'helo4',
            author:'shaura1',
            likes:8
        },
        ]
        expect(mostBlogs(ManyBlogs)).toEqual({
            author:'shaura1',
            blogs:3
        })
    })
})