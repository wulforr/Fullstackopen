const _ = require('lodash')

const mostLikedAuthor = (blogs) => {
    const uniqueAuthors = _.uniqBy(blogs,'author')
    uniqueAuthors.forEach((ele,i) => {
        const likes =  blogs.filter((blog) => blog.author === ele.author).reduce((sum,element) => sum+element.likes , 0)
        uniqueAuthors[i].likes = likes
    })
    let index = 0
    let max = blogs[index].likes
    uniqueAuthors.forEach((ele,i) => {
        if(ele.likes > max){
            max= ele.likes
            index = i
        }
    })
    return {
        author:uniqueAuthors[index].author,
        likes:uniqueAuthors[index].likes
    }
}

module.exports = mostLikedAuthor
