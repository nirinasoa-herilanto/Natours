const express = require('express');
const {
  getCheckoutSession,
  getAllBookings,
  addNewBooking,
  updateBooking,
  deleteBooking,
} = require('../controllers/booking.controller');
const { protect, restrictTo } = require('../controllers/auth.controller');

const router = express.Router();

router.use(protect);
router.get('/checkout-session/:tourId', getCheckoutSession);

router.use(restrictTo('lead-guide', 'admin'));
router.route('/').get(getAllBookings).post(addNewBooking);
router.route('/:id').patch(updateBooking).delete(deleteBooking);

module.exports = router;
