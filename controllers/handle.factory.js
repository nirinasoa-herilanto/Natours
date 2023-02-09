const catchAsync = require('../utils/catchAsync.util');
const AppError = require('../utils/appError.utils');
const APIFeatures = require('../utils/apiFeatures.utils');

/**
 * Use to check user, if this post his your own when updating or deleting
 * @param {Model} Model Collection name
 * @param {string} role user role
 */
exports.checkUser = (Model, role) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id).exec();

    if (!doc) {
      return next(new AppError(`Document not found with that ID!`, 404));
    }

    if (req.user.role === role) {
      if (req.user.id.toString() !== doc.user._id.toString()) {
        return next(
          new AppError('You are not allowed to perform this operation!', 403)
        );
      }
    }

    next();
  });

/**
 * Use to get all documents on database
 * @param {Model} Model Collections name
 * @returns Get All Middleware Function
 */
exports.getAll = (Model) =>
  catchAsync(async (req, res) => {
    // Allow nested routes on review in tour
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    // * Execute query *
    // const docs = await features.query.explain().exec();
    const docs = await features.query.exec();

    // * Send response *
    res.status(200).json({
      status: 'success',
      requestAt: req.requestTime,
      results: docs.length,
      data: docs,
    });
  });

/**
 * Use to view One specific document on database
 * @param {Model} Model Collections name
 * @param {string} popOptions Mongoose populate option
 * @returns Get One Middleware Function
 */
exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);

    if (popOptions) query = query.populate(popOptions);

    const doc = await query.exec();

    if (!doc) {
      return next(new AppError(`Document not found with that ID`, 404));
    }

    res.status(200).json({
      status: 'success',
      data: { data: doc },
    });
  });

/**
 * Use to create an document on database
 * @param {Model} Model Collections name
 * @returns Create Middleware Function
 */
exports.createOne = (Model) =>
  catchAsync(async (req, res) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      success: 'success',
      data: { data: doc },
    });
  });

/**
 * Use to update an document on database
 * @param {Model} Model Collections name
 * @returns Update Middleware Function
 */
exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).exec();

    if (!doc) {
      return next(new AppError(`Document not found with that ID`, 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

/**
 * Use to delete an document on database
 * @param {Model} Model Collections name
 * @returns Delete Middelware Function
 */
exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id).exec();

    if (!doc) {
      return next(new AppError(`Document not found with that ID`, 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });
