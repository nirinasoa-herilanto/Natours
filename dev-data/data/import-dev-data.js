const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const { port, dbLocal } = require('../../config');
const Tour = require('../../models/tour.model');

mongoose.set('strictQuery', true);
mongoose.connect(dbLocal).then(() => console.log('DB Connected'));

// Read data
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// Import data to DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data uploaded successfully :)');
  } catch (error) {
    console.log(error);
  }

  process.exit();
};

// Delete all data on DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data deleted successfully!');
  } catch (error) {
    console.log(error);
  }

  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
