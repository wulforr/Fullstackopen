const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const blogRouter = require('./controllers/blogs')



logger.info('connecting to', config.MONGOURL)

mongoose.connect(config.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => logger.info('connected succesfully'))
    .catch(err => logger.error(err))

app.use(cors())
app.use(express.json())
app.use('/api/blogs',blogRouter)


app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`)
})