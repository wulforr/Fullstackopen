const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
const blogRouter = require('./controllers/blogs')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const config = require('./utils/config')
const userRouter = require('./controllers/users')


logger.info('connecting to', config.MONGOURL)

mongoose.connect(config.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => logger.info('connected succesfully'))
    .catch(err => logger.error(err))



app.use(cors())
app.use(express.json())
app.use('/api/blogs',blogRouter)
app.use('/api/user',userRouter)

module.exports = app