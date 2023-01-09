const express = require('express');
const {
  getAllTours,
  getSpecificTour,
  AddNewTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody,
} = require('../controllers/tour.controllers');

const router = express.Router();

// # param middleware
router.param('id', checkID);

router.route('/').get(getAllTours).post(checkBody, AddNewTour);
router.route('/:id').get(getSpecificTour).patch(updateTour).delete(deleteTour);

module.exports = router;
