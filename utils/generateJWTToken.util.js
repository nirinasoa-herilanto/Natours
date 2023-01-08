const jwt = require('jsonwebtoken');
const { jwtSecretKey, jwtExpireToken } = require('../config');

/**
 * Use to generate access token
 * @param {string} id User id from database
 * @returns token
 */
module.exports = (id) => {
  return jwt.sign({ id }, jwtSecretKey, {
    expiresIn: jwtExpireToken,
  });
};
