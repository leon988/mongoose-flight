const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new mongoose.Schema({
  seat: {
    type: String,
    required: true,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  flight: {
    type: Schema.Types.ObjectId,
    ref: 'Flight',
    required: true
  }
});

module.exports = mongoose.model('Ticket', ticketSchema);

