const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

router.post('/give', (req, res, next) => {
  Pet.create(req.body)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});


module.exports = router;