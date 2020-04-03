const totalLikes = require('../utils/totalLikes')

describe('total Likes' , () => {
    test('of empty list is zero', () => {
        expect(totalLikes([])).toBe(0)
    })

    const listWithOneBlog = [
        {
            id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            _v: 0
        }
    ]
    test('when list has only one blog equals the likes of that', () => {
        const result = totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })

    const listWithManyBlogs = [
        {
            id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            _v: 0
        },
        {
            id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            _v: 0
        }
    ]
    test('of a bigger list is calculated right' , () => {
        expect(totalLikes(listWithManyBlogs)).toBe(8)
    })
})