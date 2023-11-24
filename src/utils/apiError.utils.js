const createError = require('http-errors');

class ApiError {
  constructor(statusCode, statusMessage) {
    return createError(statusCode, statusMessage);
  }
}

module.exports = {
  ApiError,
};
