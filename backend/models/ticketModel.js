const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  issue: {
    type: String,
    required: [true, 'Please select an issue'],
    enum: ['Task', 'Subtask', 'Epic', 'Bug', 'Story', 'Change', 'IT Help', 'Incident', 'New Feature', 'Problem', 'Service Request', 'Support'],
  },
  description: {
    type: String,
    required: [true, 'Please enter a description of the issue'],
  },
  status: {
    type: String,
    required: true,
    enum: ['Open', 'To Do', 'In Progress', 'In Review', 'Approved', 'Done', 'Cancelled', 'Rejected'],
    default: 'Open',
  },
},
  {
    timestamps: true,
  })

module.exports = mongoose.model('Ticket', ticketSchema)