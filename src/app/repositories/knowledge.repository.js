const { Knowledge } = require('../models');

const knowledgeModel = Knowledge;
class KnowledgeRepository {
  getAllByConditions(conditions = {}) {
    const { page = 1, size = 25, ...restConditions } = conditions;
    return knowledgeModel
      .find(restConditions)
      .skip((page - 1) * size)
      .limit(size)
      .exec();
  }

  getOneByConditions(conditions = {}) {
    return knowledgeModel.findOne(conditions);
  }

  insertOne(data) {
    return knowledgeModel.create(data);
  }

  insertMany(data) {
    return knowledgeModel.insertMany(data);
  }

  updateById(id, data) {
    return knowledgeModel.findByIdAndUpdate(id, data);
  }
}

module.exports = {
  KnowledgeRepository,
};
