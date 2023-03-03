const express = require('express');
const { isLoggedIn, protect } = require('../controllers/auth.controller');
const { createBookingCheckout } = require('../controllers/booking.controller');
const {
  displayOveview,
  displayTourDetail,
  displayUserLogin,
  displayProfile,
  viewMyTours,
  displayUserSignup,
} = require('../controllers/view.controller');

const router = express.Router();

router.get('/', isLoggedIn, displayOveview);
router.get('/login', isLoggedIn, displayUserLogin);
router.get('/signup', isLoggedIn, displayUserSignup);
router.get('/tours/:slug', isLoggedIn, displayTourDetail);

router.get('/profile', protect, displayProfile);
// "createBookingCheckout" disable/delete it, if you have an access in Stripe
router.get('/my-tours', createBookingCheckout, protect, viewMyTours);

module.exports = router;
