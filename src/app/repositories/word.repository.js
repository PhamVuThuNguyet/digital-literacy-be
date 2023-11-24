const { Word } = require('../models');
const mongoose = require('mongoose');

const wordModel = Word;
class WordRepository {
  getAllByConditions(conditions = {}) {
    const { page = 1, size = 25, ...restConditions } = conditions;
    return wordModel
      .find(restConditions)
      .skip((page - 1) * size)
      .limit(size)
      .exec();
  }

  getOneByConditions(conditions = {}) {
    return wordModel.findOne(conditions);
  }

  insertOne(data) {
    return wordModel.create(data);
  }

  insertMany(data) {
    return wordModel.insertMany(data);
  }

  updateById(id, data) {
    return wordModel.findByIdAndUpdate(id, data);
  }
}

module.exports = {
  WordRepository,
};
