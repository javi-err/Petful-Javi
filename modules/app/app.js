const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use('/api/people', require('../people/people.router'))
app.use('/api/cat', require('../cat/cat.router'))
app.use('/api/dog', require('../dog/dog.router'))

app.get("/", (req, res) => {
  return res.send("hi");
});
module.exports = app;