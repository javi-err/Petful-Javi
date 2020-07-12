const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  let response = Pets.get();

  res.json(response)
});

router.delete('/', json, (req, res) => {
  Pets.dequeue(req.body.type);
  People.dequeue();
  res.status(200).json('Adopted')
})

module.exports = router;