const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Use to catch bugs on sync code
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION Shutting down...');

  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');
const { port, dbLocal } = require('./config');

mongoose.set('strictQuery', true);
mongoose.connect(dbLocal).then(() => console.log('DB Connected'));

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Use to catch bugs on async code
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION Shutting down...');

  server.close(() => {
    process.exit(1);
  });
});
