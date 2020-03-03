const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    email: String,
    name: String,
    photoURL: {
      type: String,
      default:
        'https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png'
    },
    age: String,
    tel: String,
    state: String,
    animals: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)