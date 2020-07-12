  
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const { CLIENT_ORIGIN, NODE_ENV } = require('../../config')
const app = express()

app.use(helmet())
app.use(cors({
  origin: CLIENT_ORIGIN
}));

app.use('/api/people', require('../people/people.router'))
app.use('/api/cat', require('../cat/cat.router'))
app.use('/api/dog', require('../dog/dog.router'))

app.use((error, req, res, next) => {
  let message
  if (NODE_ENV === 'production') {
    message = 'Server error'
  }
  else {
    console.error(error)
    message = error.message
  }
  res.status(500).json(message)
})

module.exports = app