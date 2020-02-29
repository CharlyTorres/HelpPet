const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

router.post('/give', (req, res, next) => {
  const {name, size, age, typeOfPet, description, giver, photoURL, dewormed, vaccine, sterilized} = req.body
  Pet.create({name, size, age, typeOfPet, description, giver, photoURL, dewormed, vaccine, sterilized})
    .then((pet) => res.status(201).json({ pet }))
    .catch((err) => res.status(500).json({ err }));
});


router.get('/cats', (req, res, next) => {
  Pet.find({typeOfPet: 'Cat'})
    .then((pet) => res.status(200).json({ pet }))
    .catch((err) => res.status(500).json({ err }))
    
})

router.get('/dogs', (req, res, next) => {
  Pet.find({typeOfPet: 'Dog'})
    .then((pet) => res.status(200).json({ pet }))
    .catch((err) => res.status(500).json({ err }))
    
})

router.get('/others', (req, res, next) => {
  Pet.find({typeOfPet: 'other'})
    .then((pet) => res.status(200).json({ pet }))
    .catch((err) => res.status(500).json({ err }))
    
})


module.exports = router;