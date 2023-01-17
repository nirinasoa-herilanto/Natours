const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');
const { port, dbLocal } = require('./config');

mongoose.set('strictQuery', true);
mongoose.connect(dbLocal).then(() => console.log('DB Connected'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
