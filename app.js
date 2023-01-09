const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tour.routes');
const userRouter = require('./routes/user.routes');

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
  console.log(`Hello from middleware 😀`);
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ----- Routes -----
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
