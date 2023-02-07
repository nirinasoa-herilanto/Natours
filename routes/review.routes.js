const express = require('express');
const { protect, restrictTo } = require('../controllers/auth.controller');

const {
  getSpecificReview,
  getAllReviews,
  addNewReview,
  deleteReview,
  updateReview,
  setTourUserId,
} = require('../controllers/review.controller');

const router = express.Router({ mergeParams: true });

router.use(protect);

router
  .route('/')
  .get(getAllReviews)
  .post(restrictTo('user'), setTourUserId, addNewReview);

router
  .route('/:id')
  .get(getSpecificReview)
  .patch(restrictTo('user', 'admin'), updateReview)
  .delete(restrictTo('user', 'admin'), deleteReview);

module.exports = router;
