const Tour = require('../models/tour.model');

exports.checkBody = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }

  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestAt: req.requestTime,
    results: 0,
    data: null,
  });
};

exports.getSpecificTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: null,
  });
};

exports.AddNewTour = (req, res) => {};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Updated tour',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
