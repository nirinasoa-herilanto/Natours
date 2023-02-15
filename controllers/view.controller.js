const Tour = require('../models/tour.model');
const catchAsync = require('../utils/catchAsync.util');
const AppError = require('../utils/appError.utils');
const User = require('../models/user.model');

exports.displayUserLogin = catchAsync(async (req, res, next) => {
  res.status(200).render('login', {
    title: 'Log into your account',
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