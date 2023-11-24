const { UserRepository } = require('../repositories/user.repository');
const { ApiError } = require('../../utils/apiError.utils');
const { MESSAGES } = require('../../constants');
const httpStatus = require('http-status');

const userRepo = new UserRepository();
class UserService {
  getUserByUsername = (username) => {
    if (!username) {
      throw new ApiError(httpStatus.BAD_REQUEST, MESSAGES.INVALID_INPUT);
    }

    return userRepo.getOneByConditions({ username });
  };

  getUserById = (id) => {
    if (!id) {
      throw new ApiError(httpStatus.BAD_REQUEST, MESSAGES.INVALID_INPUT);
    }

    return userRepo.getOneByConditions({ _id: id });
  };

  createUser = async (data) => {
    if (!data.username || !data.password) {
      throw new ApiError(httpStatus.BAD_REQUEST, MESSAGES.INVALID_INPUT);
    }
    const isExisted = await userRepo.isExisted({ username: data.username });
    if (isExisted) {
      throw new ApiError(httpStatus.CONFLICT, MESSAGES.USER_IS_EXISTED);
    }

    return userRepo.insertOne(data);
  };

  updateUserById = (id, data) => {
    return userRepo.updateByConditions({ _id: id }, data);
  };
}

module.exports = {
  UserService,
};
