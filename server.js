const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');
const { port } = require('./config');

/**
 * All about the server
 */

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
