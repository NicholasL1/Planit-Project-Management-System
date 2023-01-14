const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'Please enter the title of the ticket!'],
  },
  name: {
    type: String,
    required: [true, 'Please enter an assignee!'],
  },
  issue: {
    type: String,
    required: [true, 'Please select an issue'],
    enum: ['Task', 'Subtask', 'Epic', 'Bug', 'Story', 'Change', 'IT Help', 'New Feature', 'Problem', 'Service Request', 'Support'],
  },
  description: {
    type: String,
    required: [true, 'Please enter a description!'],
  },
  reporter: {
    type: String,
    required: [true, 'Please enter a reporter!']
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