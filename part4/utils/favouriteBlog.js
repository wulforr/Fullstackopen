const favouriteBlog = (blogs) => {
    let index = 0
    let max = blogs[index].likes
    blogs.forEach((ele,i) => {
        if(ele.likes > max){
            max= ele.likes
            index = i
        }
    })
    return blogs[index]
}

module.exports = favouriteBlog