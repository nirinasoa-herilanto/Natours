const Review = require('../models/review.model');
const factory = require('./handle.factory');

exports.setTourUserId = (req, res, next) => {
  // allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  req.body.user = req.user.id;

  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.getSpecificReview = factory.getOne(Review);
exports.addNewReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
