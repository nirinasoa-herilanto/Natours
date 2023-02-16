const Tour = require('../models/tour.model');
const catchAsync = require('../utils/catchAsync.util');
const AppError = require('../utils/appError.utils');
const User = require('../models/user.model');
const Booking = require('../models/booking.model');

exports.displayUserLogin = catchAsync(async (req, res, next) => {
  res.status(200).render('login', {
    title: 'Log into your account',
  });
});

exports.displayUserSignup = catchAsync(async (req, res, next) => {
  res.status(200).render('signup', {
    title: 'Sign up to Natours',
  });
});

exports.displayOveview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find().exec();

  res.status(200).render('overview', {
    title: 'All tours',
    tours,
  });
});

exports.displayTourDetail = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug })
    .populate({ path: 'reviews', select: 'user photo review rating' })
    .exec();

  if (!tour) {
    return next(new AppError('Tour not found!', 404));
  }

  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour,
  });
});

exports.displayProfile = (req, res) => {
  res.status(200).render('profile', {
    title: 'Profile',
  });
};

exports.viewMyTours = catchAsync(async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).exec();

  const tourIds = bookings.map((el) => el.tour);
  const tours = await Tour.find({ _id: { $in: tourIds } }).exec();

  res.status(200).render('overview', {
    title: 'My tours',
    tours,
  });
});
