const express = require('express');
const {
  getAllTours,
  getSpecificTour,
  AddNewTour,
  updateTour,
  deleteTour,
  checkBody,
} = require('../controllers/tour.controllers');

const router = express.Router();

router.route('/').get(getAllTours).post(checkBody, AddNewTour);
router.route('/:id').get(getSpecificTour).patch(updateTour).delete(deleteTour);

module.exports = router;
