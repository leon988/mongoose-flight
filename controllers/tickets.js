const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create
};

async function newTicket(req,res){
  try {
    const flightId = req.params.id;
    res.render('tickets/new', {
      title: 'Add Ticket',
      flightId: flightId, 
      errorMsg: ''
    });
  } catch(err){
    console.log(err)
  }
}

async function create(req, res) {
  try {
    req.body.flight = req.params.id;
    const newTicket = await Ticket.create(req.body);
    const flight = await Flight.findById(req.params.id);
    flight.tickets.push(newTicket);
    await flight.save();
  } catch(err){
    console.log(err)
  }
  res.redirect('/flights/' + req.params.id);
}