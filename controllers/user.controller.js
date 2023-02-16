const multer = require('multer');
const sharp = require('sharp');
const User = require('../models/user.model');
const AppError = require('../utils/appError.utils');
const catchAsync = require('../utils/catchAsync.util');
const factory = require('./handle.factory');

/**
 * Will store in disk memory
 */
// const multerStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/img/users');
//   },
//   filename: function (req, file, cb) {
//     // user- 123456b12-1234567.jpg
//     const ext = file.mimetype.split('/')[1];

//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   },
// });

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

exports.uploadPhoto = upload.single('photo'); // 'photo', name of the fields

/**
 * image resizer
 */
exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize({ width: 500, height: 500, fit: 'cover' })
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
});

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

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

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
  const inputData = filterDataInput(req.body, 'name');
  if (req.file) inputData.photo = req.file.filename;

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

exports.addNewUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route was not implemented yet. Please use signup instead!',
  });
};

exports.getAllUsers = factory.getAll(User);
exports.viewMyProfile = factory.getOne(User);
exports.getSpecificUser = factory.getOne(User);
exports.updateUser = factory.updateOne(User); // do not update password
exports.deleteUser = factory.deleteOne(User);
