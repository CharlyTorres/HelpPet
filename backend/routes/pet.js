const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

router.post('/give', (req, res, next) => {
  const {name, size, age, typeOfPet, description, giver, photoURL} = req.body
  Pet.create({name, size, age, typeOfPet, description, giver, photoURL})
    .then((pet) => res.status(201).json({ pet }))
    .catch((err) => res.status(500).json({ err }));
});


module.exports = router;