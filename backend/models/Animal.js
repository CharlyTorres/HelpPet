const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const animalSchema = new Schema(
  {
    name: String,
    size: String,
    typeOfAnimal: String,
    race: String,
    description: String,
    giver: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    photoURL: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Animal', animalSchema)