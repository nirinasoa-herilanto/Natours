const AppError = require('../utils/appError.utils');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;

  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(["'])(?:\\.|[^\\])*?\1/);
  const message = `Duplicate field value ${value}. Please use another value!`;

  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map(
    (el) => `"${el.path}": ${el.message}`
  );

  const message = `Invalid input data on ${errors.join(', ')}`;

  return new AppError(message, 400);
};

/**
 * Use to send development error
 */
const sendDevError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stackTrace: err.stack,
  });
};

/**
 * - Use to send operationnal error.
 * - Handling error on UI (isOperational)
 */
const sendOpError = (err, res) => {
  // console.log('OP Error *', err);

  if (err.isOperational) {
    // Send error message to client
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error('* ERROR MSG *', err);

    // Due to programming or uncknown error
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong. Please try again!',
    });
  }
};

/**
 * Global error handler middleware
 */
module.exports = (err, req, res, next) => {
  err.statusCode ||= 500; // err.statusCode = err.statusCode || 500;
  err.status ||= 'error';

  if (process.env.NODE_ENV === 'development') {
    sendDevError(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    // use to reformate error
    let error = Object.create(err);

    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);

    sendOpError(error, res);
  }
};
