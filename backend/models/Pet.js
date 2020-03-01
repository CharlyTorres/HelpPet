const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const petSchema = new Schema(
  {
    name: String,
    size: String,
    typeOfPet: String,
    description: String,
    age: String,
    vaccine: String,
    dewormed: String,
    sterilized: String,
    giver: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    photoURL: {
      type: String,
      default:
        'https://www.brantcountyspca.com/wp-content/uploads/cache/images/remote/i0-wp-com/animals-4133566325.jpg'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Pet', petSchema)