var express = require('express');
var router = express.Router();
var ticketCtrl = require('../controllers/tickets');

// Route to display the ticket creation form
router.get('/flights/:id/tickets/new', ticketCtrl.new);

// Route to handle ticket creation form submission
router.post('/flights/:id/tickets', ticketCtrl.create);

module.exports = router;