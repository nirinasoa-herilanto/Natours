const Tour = require('../models/tour.model');
const APIFeatures = require('../utils/apiFeatures.utils');
const AppError = require('../utils/appError.utils');
const catchAsync = require('../utils/catchAsync.util');

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,-price';
  req.query.fields = 'name,ratingsAverage,price,summary,difficulty,duration';

  next();
};

exports.getAllTours = catchAsync(async (req, res, next) => {
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
});

exports.getSpecificTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id).exec();
  // Tour.findOne({_id: req.params.id})

  if (!tour) {
    // # same, but we need isOperational inside "AppError" later.
    // return res.status(404).json({
    //   status: 'fail',
    //   message: `No tour found with that ID`,
    // });

    return next(new AppError(`Tour not found with that ID`, 404));
  }

  res.status(200).json({
    status: 'success',
    data: { tour },
  });
});

// # Other way of handling error
exports.AddNewTour = catchAsync(async (req, res) => {
  const newTour = await Tour.create(req.body);

  res.status(201).json({
    success: 'success',
    data: { tour: newTour },
  });
});

exports.updateTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  }).exec();

  if (!tour) {
    return next(new AppError(`Tour not found with that ID`, 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
});

exports.deleteTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndDelete(req.params.id).exec();

  if (!tour) {
    return next(new AppError(`Tour not found with that ID`, 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.getTourStats = catchAsync(async (req, res, next) => {
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
});

exports.getMonthlyPlan = catchAsync(async (req, res) => {
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
        month: -1,
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
});
