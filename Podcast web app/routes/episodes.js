const express = require('express');
const router = express.Router();

// Fetch episodes data from a database or API
const episodes = [];

router.get('/', (req, res) => {
  res.render('episodes', { title: 'Episodes', episodes });
});

router.get('/:id', (req, res) => {
  const episode = episodes.find(e => e.id === parseInt(req.params.id));
  res.render('episode', { title: episode.title, episode });
});

module.exports = router;