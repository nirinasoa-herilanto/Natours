const multer = require('multer');
const sharp = require('sharp');
const Tour = require('../models/tour.model');
const AppError = require('../utils/appError.utils');
const catchAsync = require('../utils/catchAsync.util');
const factory = require('./handle.factory');

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,-price';
  req.query.fields = 'name,ratingsAverage,price,summary,difficulty,duration';

  next();
};

const multerStorage = multer.memoryStorage(); // as Buffer

/**
 * use apply filter on upload file (image, video, csv, etc.)
 */
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image, please upload only image!', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

// upload multiple images
exports.uploadTourImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 3 }, // ~ upload.array('images', 3)
]);

/**
 * image resizer
 */
exports.resizeTourImages = catchAsync(async (req, res, next) => {
  if (!req.files.imageCover || !req.files.images) return next();

  req.body.imageCover = `tour-${req.params.id}-${Date.now()}-cover.jpeg`;
  req.body.images = [];

  await sharp(req.files.imageCover[0].buffer)
    .resize({ width: 2000, height: 1333, fit: 'cover' })
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/tours/${req.body.imageCover}`);

  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `tour-${req.params.id}-${Date.now()}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize({ width: 2000, height: 1333, fit: 'cover' })
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/img/tours/${filename}`);

      req.body.images.push(filename);
    })
  );

  next();
});

exports.getAllTours = factory.getAll(Tour);
exports.getSpecificTour = factory.getOne(Tour, { path: 'reviews' });
exports.AddNewTour = factory.createOne(Tour);
exports.updateTour = factory.updateOne(Tour);
exports.deleteTour = factory.deleteOne(Tour);

/**
 * - Geospatial queries: use to find tours availble with certain postion.
 * - routes: '/tours-within/:distance/center/:coords/unit/:unit'
 */
exports.getTourWithin = catchAsync(async (req, res, next) => {
  const { distance, coords, unit } = req.params;
  const [lat, lng] = coords.split(',');

  const radius = unit === 'ml' ? distance / 3963.2 : distance / 6378.1;

  if (!lat || !lng) {
    return next(
      new AppError(
        "Please provide your coordinates with this format 'lat,lng'",
        400
      )
    );
  }

  const tours = await Tour.find({
    startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

/**
 * Geospatial aggregation: use to get distance between certains position
 */
exports.getDistances = catchAsync(async (req, res, next) => {
  const { coords, unit } = req.params;
  const [lat, lng] = coords.split(',');

  const multilier = unit === 'ml' ? 0.000621371 : 0.001;

  if (!lat || !lng) {
    return next(
      new AppError(
        "Please provide your coordinates with this format 'lat,lng'",
        400
      )
    );
  }

  const distances = await Tour.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [lng * 1, lat * 1],
        },
        distanceField: 'distance',
        distanceMultiplier: multilier,
      },
    },
    {
      $project: {
        name: 1,
        distance: 1,
      },
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      data: distances,
    },
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
