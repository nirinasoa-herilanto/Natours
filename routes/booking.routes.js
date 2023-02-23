const express = require('express');
const { getCheckoutSession } = require('../controllers/booking.controller');
const { protect } = require('../controllers/auth.controller');

const router = express.Router();

router.get('/checkout-session/:tourId', protect, getCheckoutSession);

module.exports = router;
