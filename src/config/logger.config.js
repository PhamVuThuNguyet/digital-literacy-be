const loggerLib = require('node-color-log');

const logger = {
  log(message) {
    return loggerLib.color('green').log(message);
  },
  info(message) {
    return loggerLib.color('blue').info(message);
  },
  error(message) {
    return loggerLib.color('red').error(message);
  },
};

module.exports = logger;
