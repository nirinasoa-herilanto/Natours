const express = require('express');
const {
  getAllTours,
  getSpecificTour,
  AddNewTour,
  updateTour,
  deleteTour,
  aliasTopTours,
} = require('../controllers/tour.controllers');

const router = express.Router();

// Aliasing
router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/').get(getAllTours).post(AddNewTour);
router.route('/:id').get(getSpecificTour).patch(updateTour).delete(deleteTour);

module.exports = router;
