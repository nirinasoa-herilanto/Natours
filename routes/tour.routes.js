const express = require('express');
const {
  getAllTours,
  getSpecificTour,
  AddNewTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
  getTourWithin,
  getDistances,
  uploadTourImages,
  resizeTourImages,
} = require('../controllers/tour.controllers');

const { protect, restrictTo } = require('../controllers/auth.controller');

const reviewRouter = require('./review.routes');

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter); // allow to use nested routes

// Aliasing
router.route('/top-5-cheap').get(aliasTopTours, getAllTours);
router.route('/tour-stats').get(getTourStats);
router
  .route('/monthly-plans/:year')
  .get(protect, restrictTo('admin', 'lead-guide', 'guide'), getMonthlyPlan);

router
  .route('/tours-within/:distance/center/:coords/unit/:unit')
  .get(getTourWithin);

router.route('/distances/:coords/unit/:unit').get(getDistances);

router
  .route('/')
  .get(getAllTours)
  .post(protect, restrictTo('admin', 'lead-guide'), AddNewTour);

router
  .route('/:id')
  .get(getSpecificTour)
  .patch(
    protect,
    restrictTo('admin', 'lead-guide'),
    uploadTourImages,
    resizeTourImages,
    updateTour
  )
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

module.exports = router;
