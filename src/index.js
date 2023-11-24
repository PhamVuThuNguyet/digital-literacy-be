const app = require('./app');
const connectDB = require('./config/database.config');
const logger = require('./config/logger.config');
const environmentConfig = require('./config/environment.config');
const listEndpoints = require('express-list-endpoints');
const { logAllRoutes } = require('./utils/misc.utils');

connectDB()
  .then(() => {
    app.listen(environmentConfig.port, () => {
      logger.info('App listening on port ' + environmentConfig.port);
      logAllRoutes(listEndpoints(app));
    });
  })
  .catch((err) => logger.error(err));
