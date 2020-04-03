require('dotenv').config()

const PORT = process.env.PORT
const MONGOURL = process.env.MONGOURL

module.exports = {
    MONGOURL,PORT
}