const { QuestionRepository } = require('../repositories/question.repository');

const questionRepo = new QuestionRepository();

class QuestionService {
  getAllQuestions(conditions = {}) {
    return questionRepo.getAllByConditions(conditions);
  }

  createOneQuestion(data) {
    return questionRepo.insertOne(data);
  }

  createManyQuestion(data) {
    return questionRepo.insertMany(data);
  }

  updateQuestionById(id, data) {
    return questionRepo.updateById(id, data);
  }

  deleteQuestionById(id) {
    return questionRepo.deleteById(id);
  }
}

module.exports = {
  QuestionService,
};
