const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a valid first name']
  },
  lastName: {
    type: String,
    required: [true, 'Please add a valid last name']
  },
  email: {
    type: String,
    required: [true, 'Please add a valid email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a valid password']
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
},
  {
    timestamps: true,
  })

module.exports = mongoose.model('User', userSchema)