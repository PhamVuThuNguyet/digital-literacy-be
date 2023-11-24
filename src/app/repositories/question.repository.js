const { Question } = require('../models');
const mongoose = require('mongoose');

const questionModel = Question;
class QuestionRepository {
  getAllByConditions(conditions = {}) {
    const { page = 1, size = 25, ...restConditions } = conditions;
    return questionModel
      .find(restConditions)
      .skip((page - 1) * size)
      .limit(size)
      .exec();
  }

  getOneByConditions(conditions = {}) {
    return questionModel.findOne(conditions);
  }

  insertOne(data) {
    return questionModel.create(data);
  }

  insertMany(data) {
    return questionModel.insertMany(data);
  }

  updateById(id, data) {
    return questionModel.findByIdAndUpdate(id, data);
  }

  deleteById(id) {
    return questionModel.findByIdAndDelete(id);
  }
}

module.exports = {
  QuestionRepository,
};
