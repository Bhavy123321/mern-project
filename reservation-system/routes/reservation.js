const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// @route  POST api/reservations
// @desc   Create a reservation
// @access Public
router.post('/', reservationController.createReservation);

module.exports = router;
