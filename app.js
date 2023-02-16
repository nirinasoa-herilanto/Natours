const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const compression = require('compression');

const tourRouter = require('./routes/tour.routes');
const userRouter = require('./routes/user.routes');
const reviewRouter = require('./routes/review.routes');
const viewRouter = require('./routes/view.routes');
const bookingRouter = require('./routes/booking.routes');

const AppError = require('./utils/appError.utils');
const globalErrorHandler = require('./controllers/error.controller');
const { webHookCheckout } = require('./controllers/booking.controller');

/**
 * Natours application
 */
const app = express();

app.enable('trust proxy');

app.use(cors());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// app.use(helmet()); // set security HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'worker-src': ['blob:'],
        'child-src': ['blob:'],
        'img-src': ["'self'", 'data: image/webp'],
        'script-src': [
          "'self'",
          'https://api.mapbox.com',
          'https://cdnjs.cloudflare.com',
          'https://js.stripe.com/',
          "'unsafe-inline'",
        ],
        'connect-src': [
          "'self'",
          'ws://localhost:*',
          'ws://127.0.0.1:*',
          'http://127.0.0.1:*',
          'http://localhost:*',
          'https://*.tiles.mapbox.com',
          'https://api.mapbox.com',
          'https://events.mapbox.com',
          'https://js.stripe.com/',
        ],
      },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: 'cross-origin',
  })
);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  message: 'Too many request from this IP. Please try again after an hour!',
});

app.use('/api', limiter);

// (only for production) Stripe will call it automatically when checkout is created
app.post(
  '/webhook-checkout',
  express.raw({ type: 'application/json' }),
  webHookCheckout
);

app.use(express.json({ limit: '1mb' })); // body parser, reading data from req.body
app.use(cookieParser());

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

// compress all text response
app.use(compression());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ----- Routes -----
/**
 * pref-light phased, allow all patch & delete request on complex endpoint
 * -  app.options('api/v1/tours/:id', cors()); only patch & delete can be done on this complex endpoint
 * */
app.options('*', cors());

app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);

// # Handling unhandled routes
app.all('*', (req, res, next) => {
  const err = new AppError(`Can't find ${req.originalUrl} on the server.`, 404);

  next(err);
});

// # Error handling (globally), catch all errors on the server.
app.use(globalErrorHandler);

// # Handling unhandled routes
app.all('*', (req, res, next) => {
  const err = new AppError(`Can't find ${req.originalUrl} on the server.`, 404);

  next(err);
});

// # Error handling (globally), catch all errors on the server.
app.use(globalErrorHandler);

module.exports = app;
