const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all pets currently up for adoption.
  return res.json(Pets.get());
});

router.delete("/", json, (req, res) => {
  // Remove a pet from adoption.
  if (req.body.type !== "dog" && req.body.type !== "cat") {
    res.status(400, "Valid animal");
  }
  Pets.dequeue(req.body.type);
  People.dequeue();
  res.status(204).end();
});

router.get("/all", json, (req, res) => {
  return res.json(Pets.getAll());
});

module.exports = router;