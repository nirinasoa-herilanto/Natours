class AppError extends Error {
  /**
   * Use to handle error
   * @param {string} message  error message
   * @param {number} statusCode   status code number
   */
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
