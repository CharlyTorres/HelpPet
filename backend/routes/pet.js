const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');
const User = require('../models/User')

router.post('/give', async (req, res, next) => {
  const {name, size, age, typeOfPet, description, photoURL, dewormed, vaccine, sterilized} = req.body
  const {_id} = req.user
  const petCreated = await Pet.create({name, size, age, typeOfPet, description, photoURL, dewormed, vaccine, sterilized, giver: _id})
  const petPopulated = await (await Pet.findById(petCreated._id)).populate('giver')
  const user = await User.findOneAndUpdate(
    _id,
    { $push: { animals: petCreated._id } },
  ).populate({
    path: 'animals',
    populate: {
       path: 'giver',
      model: 'User' }
  })
    return res.status(201).json({ user, animals: petPopulated })
});


router.get('/cats', (req, res, next) => {
  Pet.find({typeOfPet: 'Cat'}).populate('giver')
    .then((pet) => res.status(200).json({ pet }))
    .catch((err) => res.status(500).json({ err }))
    
})

router.get('/dogs', (req, res, next) => {
  Pet.find({typeOfPet: 'Dog'}).populate('giver')
    .then((pet) => res.status(200).json({ pet }))
    .catch((err) => res.status(500).json({ err }))
    
})

router.get('/others', async (req, res, next) => {
  Pet.find({typeOfPet: 'other'}).populate('giver')
    .then((pet) => res.status(200).json({ pet }))
    .catch((err) => res.status(500).json({ err }))
    
})

router.get('/adoptionpets', async (req, res, next) => {
  const pets = await Pet.find()
    .populate('giver')
  res.status(200).json({ pets })
})


module.exports = router;