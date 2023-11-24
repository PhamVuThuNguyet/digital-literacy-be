const { KnowledgeRepository } = require('../repositories/knowledge.repository');

const knowledgeRepo = new KnowledgeRepository();

class KnowledgeService {
  getAllKnowledge(conditions = {}) {
    return knowledgeRepo.getAllByConditions(conditions);
  }

  createOneKnowledge(data) {
    return knowledgeRepo.insertOne(data);
  }

  createManyKnowledge(data) {
    return knowledgeRepo.insertMany(data);
  }

  updateKnowledgeById(id, data) {
    return knowledgeRepo.updateById(id, data);
  }

  deleteKnowledgeById(id) {
    return knowledgeRepo.deleteById(id);
  }
}

module.exports = {
  KnowledgeService,
};
