const router = require('express').Router();
const puppies = require('./puppies.json');
module.exports = router;

const randomFromArray = a => a[Math.floor(Math.random() * a.length)];

router.get('/random-puppy', (req, res) =>
  res.send(randomFromArray(puppies))
);

