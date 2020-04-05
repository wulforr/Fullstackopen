const _ = require('lodash')

const mostBlogs = (blogs) => {
    const uniqueAuthors = _.uniqBy(blogs,'author')
    const totalBlogs = []
    uniqueAuthors.forEach((ele) => {
        const blogsByAuthor =  blogs.filter((blog) => blog.author === ele.author).length
        totalBlogs.push({
            author: ele.author,
            'blogs': blogsByAuthor
        })
    })
    let index = 0
    let max = totalBlogs[index].blogs
    totalBlogs.forEach((ele,i) => {
        if(ele.blogs > max){
            max= ele.blogs
            index = i
        }
    })
    return totalBlogs[index]
}

module.exports = mostBlogs
