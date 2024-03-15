const Flight = require('../models/flight');

module.exports = {
  create
};

async function create(req, res) {
  const flight = await Flight.findById(req.params.id);
  flight.destinations.push({
    destination: req.body.destination,
    arrival: req.body.arrival,
    airport: req.body.airport
  });
  try {
    // Save any changes made to the flight doc
    await flight.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/flights/${flight._id}`)
};