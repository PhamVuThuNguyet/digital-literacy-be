const { UserService } = require('./user.service');
const { ApiError } = require('../../utils/apiError.utils');
const { compareHash } = require('../../utils/bcrypt.utils');
const { MESSAGES } = require('../..//constants');
const httpStatus = require('http-status');

const userService = new UserService();

class AuthService {
  async login(data) {
    if (!data.username || !data.password) {
      throw new ApiError(httpStatus.BAD_REQUEST, MESSAGES.INVALID_INPUT);
    }

    const user = await userService.getUserByUsername(data.username);
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, MESSAGES.USER_NOT_FOUND);
    }

    if (!compareHash(data.password, user.password)) {
      throw new ApiError(httpStatus.UNAUTHORIZED, MESSAGES.PASSWORD_NOT_VALID);
    }

    user.password = undefined;
    return user;
  }
}

module.exports = {
  AuthService,
};
