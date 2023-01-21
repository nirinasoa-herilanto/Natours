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
} = require('../controllers/tour.controllers');

const router = express.Router();

// Aliasing
router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plans/:year').get(getMonthlyPlan);

router.route('/').get(getAllTours).post(AddNewTour);
router.route('/:id').get(getSpecificTour).patch(updateTour).delete(deleteTour);

module.exports = router;
