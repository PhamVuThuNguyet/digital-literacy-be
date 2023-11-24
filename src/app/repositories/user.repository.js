const { User } = require('../models');

class UserRepository {
  getAllByConditions(conditions = {}) {
    return User.find(conditions);
  }

  getOneByConditions(conditions = {}) {
    return User.findOne(conditions);
  }

  insertOne(data) {
    return User.create(data);
  }

  insertMany(data) {
    return User.insertMany(data);
  }

  isExisted(conditions) {
    return User.exists(conditions);
  }

  updateByConditions(conditions, data) {
    return User.findOneAndUpdate(conditions, data);
  }
}

module.exports = {
  UserRepository,
};
