const catchAsync = require('../utils/catchAsync.util');
const { stripeApiKey } = require('../config');
const stripe = require('stripe')(stripeApiKey);
const Tour = require('../models/tour.model');
const AppError = require('../utils/appError.utils');
const Booking = require('../models/booking.model');
const factory = require('../controllers/handle.factory');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // Get the currently booked tour
  const tour = await Tour.findById(req.params.tourId).exec();
  // Create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/?tour=${
      req.params.tourId
    }&user=${req.user.id}&price=${tour.price}`,
    cancel_url: `${req.protocol}://${req.get('host')}/tours/${tour.slug}`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourId,
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: tour.price * 100,
          currency: 'usd',
          product_data: {
            name: `${tour.name} Tour`,
            description: tour.summary,
            images: [`https://www.natours.dev/img/tours/${tour.imageCover}`],
          },
        },
        quantity: 1,
      },
    ],
  });

  // Create session as response
  res.status(200).json({
    status: 'success',
    session,
  });
});

/**
 * Temporary for create booking checkout (unsecure)
 * - in production, use stripe webhooks
 */
exports.createBookingCheckout = catchAsync(async (req, res, next) => {
  const { user, tour, price } = req.query;

  if (!user && !tour && !price) return next();

  await Booking.create({ tour, user, price });

  res.redirect(req.originalUrl.split('?')[0]);
});

exports.getAllBookings = factory.getAll(Booking);
exports.getSpecificBooking = factory.getOne(Booking);
exports.addNewBooking = factory.createOne(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
