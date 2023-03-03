const catchAsync = require('../utils/catchAsync.util');
const { stripeApiKey, stripeWebhookSecret } = require('../config');
const stripe = require('stripe')(stripeApiKey);
const Tour = require('../models/tour.model');
const AppError = require('../utils/appError.utils');
const Booking = require('../models/booking.model');
const factory = require('../controllers/handle.factory');
const User = require('../models/user.model');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // Get the currently booked tour
  const tour = await Tour.findById(req.params.tourId).exec();
  // Create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/my-tours/?tour=${
      req.params.tourId
    }&user=${req.user.id}&price=${tour.price}`,
    // please uncomment if you have an accessed to Stripe and disable the other success_url
    // success_url: `${req.protocol}://${req.get('host')}/my-tours,
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
            images: [
              `${req.protocol}://${req.get('host')}/img/tours/${
                tour.imageCover
              }`,
            ],
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
 * - Do not recommand for production.
 */
exports.createBookingCheckout = catchAsync(async (req, res, next) => {
  const { user, tour, price } = req.query;

  if (!user && !tour && !price) return next();

  await Booking.create({ tour, user, price });

  res.redirect(req.originalUrl.split('?')[0]);
});

/**
 * Use to create booking checkout
 * @param {Object} session stripe checkout session
 */
const addBookingCheckout = async (session) => {
  const tour = session.client_reference_id;
  const user = (await User.findOne({ email: session.customer_email }).exec())
    .id;

  const price = session.line_items[0].price_data.unit_amount / 100;

  await Booking.create({ tour, user, price });
};

/**
 * More secure, on creating booking checkout with Stripe hook. Recommand to use it in production
 */
exports.webHookCheckout = catchAsync(async (req, res, next) => {
  const signature = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      stripeWebhookSecret
    );
  } catch (error) {
    return res.status(400).send(`Webhook error: ${error?.message}`);
  }

  if (event.type === 'checkout-session-completed')
    addBookingCheckout(event.data.object);

  res.status(200).json({ received: true });
});

exports.getAllBookings = factory.getAll(Booking);
exports.getSpecificBooking = factory.getOne(Booking);
exports.addNewBooking = factory.createOne(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
