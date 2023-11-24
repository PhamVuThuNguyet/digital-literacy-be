const httpStatus = require('http-status');
const { QuestionService } = require('../services/question.service');
const { ApiError } = require('../../utils/apiError.utils');
const { MESSAGES } = require('../../constants');

const questionService = new QuestionService();
class QuestionController {
  async index(req, res, next) {
    try {
      const result = await questionService.getAllQuestions(req.query);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const result = await questionService.createManyQuestion(req.body);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const result = await questionService.updateQuestionById(req.params.id, req.body);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await questionService.deleteQuestionById(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  QuestionController,
};
