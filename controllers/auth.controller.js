const { promisify } = require('util');
const crypto = require('crypto');
const User = require('../models/user.model');
const AppError = require('../utils/appError.utils');
const catchAsync = require('../utils/catchAsync.util');
const generateJWTToken = require('../utils/generateJWTToken.util');
const jwt = require('jsonwebtoken');
const { jwtSecretKey, jwtCookieExpire } = require('../config');
const Email = require('../utils/email.util');

/**
 * Use create auth response
 * @param {Response} res Response
 * @param {number} statusCode  status code
 * @param {User} user User response
 */
const createAuthResponse = (req, res, statusCode, user) => {
  const token = generateJWTToken(user._id);

  const cookieOptions = {
    expires: new Date(Date.now() + jwtCookieExpire * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  if (req.secure || req.headers['x-forwarded-proto'] === 'https')
    cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  // remove password
  user.password = undefined;
  user.active = undefined;

  res.status(statusCode).json({
    status: 'success',
    accessToken: token,
    ...(statusCode === 201 && { data: { user } }),
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const url = `${req.protocol}://${req.get('host')}/profile`;

  await new Email(user, url).sendWelcome();

  createAuthResponse(req, res, 201, user);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password').exec();

  if (!user || !(await user.checkPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password!', 401));
  }

  createAuthResponse(req, res, 200, user);
});

exports.logout = (req, res) => {
  res.clearCookie('jwt');

  res.status(200).json({ status: 'success' });
};

/**
 * use to log out
 */
exports.logout = (req, res) => {
  res.clearCookie('jwt');

  res.status(200).json({ status: 'success' });
};

/**
 * Protected middleware
 */
exports.protect = catchAsync(async (req, res, next) => {
  let token;

  // 1- Getting accessToken & check if it exists
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError('You are not logged in. Please log in to get access', 401)
    );
  }

  // 2- Verify accessToken (valid/expires)
  const decoded = await promisify(jwt.verify)(token, jwtSecretKey);

  // 3- Verirify the user
  const currentUser = await User.findById(decoded.id).exec();

  if (!currentUser) {
    return next(
      new AppError('The user belonging to this token does no longer exist', 401)
    );
  }

  // 4- Check if the currentUser changed pw after the token was issued(created)
  if (currentUser.changePasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password. Please try again!', 401)
    );
  }

  req.user = currentUser; // grant access to protected route (ex: {role:'admin'})
  res.locals.user = currentUser;
  next();
});

/**
 * Only use to manage render page.
 */
exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 2- Verify accessToken (valid/expires)
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        jwtSecretKey
      );

      // 3- Verirify the user
      const currentUser = await User.findById(decoded.id).exec();

      if (!currentUser) {
        return next();
      }

      // 4- Check if the currentUser changed pw after the token was issued(created)
      if (currentUser.changePasswordAfter(decoded.iat)) {
        return next();
      }

      // user is connected
      res.locals.user = currentUser; // send back to a template "user"
      return next();
    } catch (error) {
      return next();
    }
  }

  next();
};

/**
 * Use to check user role
 * @param  {string | string[]} roles User roles
 * @returns access or not accessed
 */
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You are not allowed to perform this action', 403)
      );
    }

    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // get the user
  const user = await User.findOne({ email: req.body.email }).exec();

  if (!user) {
    return next(new AppError('There is no user with that email!', 404));
  }

  // generate random token
  const resetToken = user.createResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  try {
    // send email to user
    const resetEmail = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/users/reset-password/${resetToken}`;

    await new Email(user, resetEmail).sendPasswordReset();

    res.status(200).json({
      status: 'success',
      message: 'Token send to the email!',
    });
  } catch (error) {
    // reinitialized all steps (forgot pw)
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500
      )
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1- Get user based on token
  const hashToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashToken,
    passwordResetExpires: { $gt: Date.now() },
  }).exec();

  // 2- Verify token (not expires, there is a user, set new pw)
  if (!user) {
    return next(new AppError('Invalid or expire token!', 400));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3- log the user in, send JWT(accessToken)
  createAuthResponse(req, res, 200, user);
});

/**
 * Update password
 */
exports.updatePassword = catchAsync(async (req, res, next) => {
  const { currentPassword, password, passwordConfirm } = req.body;

  // Verify user
  const user = await User.findById(req.user.id).select('+password').exec();

  if (!(await user.checkPassword(currentPassword, user.password))) {
    return next(new AppError('Incorrent current password', 401));
  }

  // Update password
  user.password = password;
  user.passwordConfirm = passwordConfirm;
  await user.save();

  // Send access token
  createAuthResponse(req, res, 200, user);
});
