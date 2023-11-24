const httpStatus = require('http-status');
const { UserService } = require('../services/user.service');
const { AuthService } = require('../services/auth.service');
const { catchAsync } = require('../../utils/catchAsync.utils');

const userService = new UserService();
const authService = new AuthService();

class UserController {
  /**
   * [GET] /api/v1/users/:id
   */
  show = catchAsync(async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    return res.status(httpStatus.OK).json(user);
  });

  update = catchAsync(async (req, res) => {
    await userService.updateUserById(req.params.id, req.body);
    return res.status(httpStatus.OK).send();
  });
}

module.exports = {
  UserController,
};
