const Tour = require('../models/tour.model');

exports.AddNewTour = async (req, res) => {
  try {
    // const newTour = new Tour({});
    // newTour.save();

    const newTour = await Tour.create(req.body);

    res.status(201).json({
      success: 'success',
      data: { tour: newTour },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data input!',
    });
  }
};

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find().exec();

    res.status(200).json({
      status: 'success',
      requestAt: req.requestTime,
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: 'Resource not found!',
    });
  }
};

exports.getSpecificTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id).exec();
    // Tour.findOne({_id: req.params.id})

    res.status(200).json({
      status: 'success',
      data: { tour },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: 'Resource not found!',
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).exec();

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Bad request!',
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id).exec();

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: 'Resource not found!',
    });
  }
};
