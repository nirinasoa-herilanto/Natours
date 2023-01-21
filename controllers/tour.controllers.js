const Tour = require('../models/tour.model');
const APIFeatures = require('../utils/apiFeatures.utils');

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,-price';
  req.query.fields = 'name,ratingsAverage,price,summary,difficulty,duration';

  next();
};

exports.getAllTours = async (req, res) => {
  try {
    const features = new APIFeatures(Tour, req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    // * Execute query *
    const tours = await features.query.exec();

    // * Send response *
    res.status(200).json({
      status: 'success',
      requestAt: req.requestTime,
      results: tours.length,
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

exports.AddNewTour = async (req, res) => {
  try {
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

exports.getTourStats = async (req, res) => {
  try {
    const stats = await Tour.aggregate([
      {
        $match: { ratingsAverage: { $gte: 4.5 } },
      },
      {
        $group: {
          // "null" means all Tour, or we can set a specific fields by adding $fields
          _id: { $toUpper: '$difficulty' },
          numTours: { $sum: 1 },
          numRating: { $sum: '$ratingsQuantity' },
          avgRating: { $avg: '$ratingsAverage' },
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
        },
      },
      {
        $sort: {
          avgPrice: 1,
        },
      },
      // {
      //   $match: { _id: { $ne: 'EASY' } },
      // },
    ]);

    res.status(200).json({
      status: 'success',
      data: { stats },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: 'Resource not found!',
    });
  }
};

exports.getMonthlyPlan = async (req, res) => {
  try {
    const year = req.params.year * 1; // 2021

    console.log(year);

    const plans = await Tour.aggregate([
      {
        $unwind: '$startDates',
      },
      {
        $match: {
          startDates: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`),
          },
        },
      },
      {
        $group: {
          _id: { $month: '$startDates' },
          numTourStart: { $sum: 1 },
          tours: { $push: '$name' },
        },
      },
      {
        $addFields: {
          month: '$_id',
        },
      },
      {
        $project: {
          _id: 0, // we can manipulate by adding 0/1 (showing this value)
          // numTourStart: 1,
        },
      },
      {
        $sort: {
          month: 1,
        },
      },
      // {
      //   $limit: 5,
      // },
    ]);

    res.status(200).json({
      status: 'success',
      data: { plans },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: 'Ressource not found!',
    });
  }
};
