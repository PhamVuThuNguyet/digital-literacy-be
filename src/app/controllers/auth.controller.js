const httpStatus = require('http-status');
const { UserService } = require('../services/user.service');
const { AuthService } = require('../services/auth.service');
const { catchAsync } = require('../../utils/catchAsync.utils');
const { generateToken } = require('../../utils/jwt.utils');
const { ApiError } = require('../../utils/apiError.utils');
const { MESSAGES } = require('../../constants');

const userService = new UserService();
const authService = new AuthService();

class AuthController {
  /**
   * [POST] /api/v1/auth/register
   */
  register = catchAsync(async (req, res) => {
    const user = await userService.createUser(req.body);
    const { accessToken, refreshToken } = generateToken({ id: user._id, username: user.username });
    user.password = undefined;
    return res.status(httpStatus.CREATED).json({
      user,
      accessToken,
      refreshToken,
    });
  });

  /**
   * [POST] /api/v1/auth/login
   */
  login = catchAsync(async (req, res) => {
    const { role = 'user' } = req.body;
    const user = await authService.login({ username: req.body.username, password: req.body.password });
    if (user.role !== role) {
      throw new ApiError(httpStatus.UNAUTHORIZED, MESSAGES.UNAUTHORIZED);
    }
    const { accessToken, refreshToken } = generateToken({ id: user._id, username: user.username });

    return res.status(httpStatus.OK).json({
      user,
      accessToken,
      refreshToken,
    });
  });
}

module.exports = {
  AuthController,
};
