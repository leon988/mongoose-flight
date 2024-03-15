var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');
	

// all paths start with /movies

// GET  /flight  
router.get('/', flightsCtrl.index);

// GET /flights/new
router.get('/new', flightsCtrl.new);

// GET /movies/:id
router.get('/:id', flightsCtrl.show);

// POST /flights
router.post('/', flightsCtrl.create);

	
module.exports = router;