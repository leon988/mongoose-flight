const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newFlight,
  create, 
  index,
  show
};

async function show(req, res){
  const flight = await Flight.findById(req.params.id).populate('tickets')
  res.render('flights/show', {flight, title: 'Flight'})
};

async function index(req, res) {
  const flights = await Flight.find({})
  res.render('flights/index', { title: 'All Flights', flights })
};

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight',
    errorMsg: '',
  });
};

async function create(req, res) {
  try {
    // Extract flight details from the request body
    const { airline, airport, flightNo, departs } = req.body;
    // Validate and save the new flight to the database
    const newFlight = new Flight({
      airline,
      airport,
      flightNo,
      departs,
    });
    await newFlight.save();
    // Redirect to the list of flights after successfully creating a new flight
    res.redirect('/flights');
  } catch (error) {
    console.error(error);
  }
};