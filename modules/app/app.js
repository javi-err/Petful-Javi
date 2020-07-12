const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use('/api/people', require('../people/people.router'))
app.use('/api/cats', require('../cat/cat.router'))
app.use('/api/dogs', require('../dog/dog.router'))


module.exports = app