const User = require('../models/user.model');
const APIFeatures = require('../utils/apiFeatures.utils');
const AppError = require('../utils/appError.utils');
const catchAsync = require('../utils/catchAsync.util');

/**
 * Use to filter data input (req.body)
 * @param {Objecct} obj request.body
 * @param  {string} allowFields object key that we allow
 * @returns Object filter
 */
const filterDataInput = (obj, ...allowFields) => {
  const newObj = {};

  Object.keys(obj).forEach((el) => {
    if (allowFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

exports.getAllUsers = catchAsync(async (req, res) => {
  const features = new APIFeatures(User, req.query).filter();

  const users = await features.query.exec();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: { users },
  });
});

/**
 * Use to update user profile(me)
 */
exports.updateProfile = catchAsync(async (req, res, next) => {
  const { password, passwordConfirm } = req.body;

  // Check if user post a password
  if (password || passwordConfirm) {
    return next(
      new AppError(
        'This route is not for update password. Please go to /update-password',
        400
      )
    );
  }

  // Filter data input that no allowed to updated
  const inputData = filterDataInput(req.body, 'name', 'email');

  const userUpdated = await User.findByIdAndUpdate(req.user.id, inputData, {
    new: true,
    runValidators: true,
  }).exec();

  res.status(200).json({
    status: 'success',
    data: { user: userUpdated },
  });
});

/**
 * Use delete account(disable, not deleting user completely on DB)
 */
exports.deleteAccount = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false }).exec();

  res.status(204).json({
    status: 'succes',
    data: null,
  });
});

exports.getSpecificUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route was not implemented yet.',
  });
};

exports.addNewUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route was not implemented yet.',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route was not implemented yet.',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route was not implemented yet.',
  });
};
