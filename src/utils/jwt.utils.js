const jwt = require('jsonwebtoken');
const environmentConfig = require('../config/environment.config');

const generateToken = (data) => {
  const accessToken = jwt.sign(data, environmentConfig.JWT_SECRET, { expiresIn: environmentConfig.JWT_TTL });
  const refreshToken = jwt.sign(data, environmentConfig.JWT_SECRET, { expiresIn: environmentConfig.JWT_REFRESH_TTL });

  return {
    accessToken,
    refreshToken,
  };
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, environmentConfig.JWT_SECRET);
    return decoded;
  } catch (error) {
    return '';
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
