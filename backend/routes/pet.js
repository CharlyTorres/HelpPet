const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

router.post('/give', (req, res, next) => {
  const {name, size, age, typeOfPet, description, giver, photoURL} = req.body
  Pet.create({name, size, age, typeOfPet, description, giver, photoURL})
    .then((pet) => res.status(201).json({ pet }))
    .catch((err) => res.status(500).json({ err }));
});


router.get('/adopt', (req, res, next) => {
  Pet.find({typeOfPet: 'Cat'})
    .then((pet) => res.status(200).json({ pet }))
    .catch((err) => res.status(500).json({ err }))
    
})


module.exports = router;