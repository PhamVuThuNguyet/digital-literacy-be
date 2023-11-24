const { WordService } = require('../services/word.service');
const httpStatus = require('http-status');
const { ApiError } = require('../../utils/apiError.utils');
const { MESSAGES } = require('../../constants');

const wordService = new WordService();
class WordController {
  async index(req, res, next) {
    try {
      const result = await wordService.getAllWords();
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const result = await wordService.createOneWord(req.body);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const result = await wordService.updateWordById(req.params.id, req.body);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await questionService.deleteWordById(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  WordController,
};
