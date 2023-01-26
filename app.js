const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tour.routes');
const userRouter = require('./routes/user.routes');
const AppError = require('./utils/appError.utils');
const globalErrorHandler = require('./controllers/error.controller');

/**
 * Natours application
 */
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ----- Middlewares -----
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ----- Routes -----
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// # Handling unhandled routes
app.all('*', (req, res, next) => {
  // # built error, same as AppError classes
  // const err = new Error(`Can't find ${req.originalUrl} on the server.`);
  // err.statusCode = 404;
  // err.status = 'fail';

  const err = new AppError(`Can't find ${req.originalUrl} on the server.`, 404);

  next(err);
});

// # Error handling (globally), catch all errors on the server.
app.use(globalErrorHandler);

module.exports = app;
