const { QuestionController } = require('./question.controller');
const { WordController } = require('./word.controller');
const { AuthController } = require('./auth.controller');
const { UserController } = require('./user.controller');
const { KnowledgeController } = require('./knowledge.controller');

const questionController = new QuestionController();
const authController = new AuthController();
const userController = new UserController();
const wordController = new WordController();
const knowledgeController = new KnowledgeController();

module.exports = {
  questionController,
  authController,
  userController,
  wordController,
  knowledgeController,
};
