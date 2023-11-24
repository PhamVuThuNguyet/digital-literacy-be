const environmentConfig = require('./environment.config');
const mongoose = require('mongoose');

const connectDB = async () => {
  return mongoose.connect(environmentConfig.mongoose.url);
};

module.exports = connectDB;
