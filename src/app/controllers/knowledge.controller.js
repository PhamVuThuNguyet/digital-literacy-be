const { KnowledgeService } = require('../services/knowledge.service');
const httpStatus = require('http-status');
const { ApiError } = require('../../utils/apiError.utils');
const { MESSAGES } = require('../../constants');

const knowledgeService = new KnowledgeService();
class KnowledgeController {
  async index(req, res, next) {
    try {
      const result = await knowledgeService.getAllKnowledge();
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const result = await knowledgeService.createOneKnowledge(req.body);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const result = await knowledgeService.updateKnowledgeById(req.params.id, req.body);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await questionService.deleteKnowledgeById(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  KnowledgeController,
};
