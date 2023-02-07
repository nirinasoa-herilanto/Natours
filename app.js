const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const tourRouter = require('./routes/tour.routes');
const userRouter = require('./routes/user.routes');
const reviewRouter = require('./routes/review.routes');
const AppError = require('./utils/appError.utils');
const globalErrorHandler = require('./controllers/error.controller');

/**
 * Natours application
 */
const app = express();

app.use(helmet()); // set security HTTP headers

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  message: 'Too many request from this IP. Please try again after an hour!',
});

app.use('/api', limiter);

app.use(express.json({ limit: '1mb' })); // body parser, reading data from req.body

app.use(mongoSanitize()); // to prevent for NoSQL injections
app.use(xss());

//to prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'price',
      'difficulty',
      'ratingsAverage',
      'ratingsQuantity',
      'maxGroupSize',
    ],
  })
);

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ----- Routes -----
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

// # Handling unhandled routes
app.all('*', (req, res, next) => {
  const err = new AppError(`Can't find ${req.originalUrl} on the server.`, 404);

  next(err);
});

// # Error handling (globally), catch all errors on the server.
app.use(globalErrorHandler);

module.exports = app;
