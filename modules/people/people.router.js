  
const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')
const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  const people = People.get()
  return res.json(people)
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const { person } = req.body
  People.enqueue(person)
  return res.json(People.get())
})

router.delete('/', json, (req, res) => {
  const { person } = req.body
  People.dequeue(person)
  return res.json(People.get())
})

module.exports = router