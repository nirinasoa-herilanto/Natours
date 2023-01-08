const express = require('express');
const Review = require('../models/review.model');
const { protect, restrictTo } = require('../controllers/auth.controller');
const {
  getSpecificReview,
  getAllReviews,
  addNewReview,
  deleteReview,
  updateReview,
  setTourUserId,
} = require('../controllers/review.controller');
const { checkUser } = require('../controllers/handle.factory');

const router = express.Router({ mergeParams: true });

router.use(protect);

router
  .route('/')
  .get(getAllReviews)
  .post(restrictTo('user'), setTourUserId, addNewReview);

router
  .route('/:id')
  .get(getSpecificReview)
  .patch(restrictTo('user', 'admin'), checkUser(Review, 'user'), updateReview)
  .delete(restrictTo('user', 'admin'), checkUser(Review, 'user'), deleteReview);

module.exports = router;
