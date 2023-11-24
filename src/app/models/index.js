const mongoose = require('mongoose');
const QuestionSchema = require('./Question.schema');
const UserSchema = require('./User.schema');
const WordSchema = require('./Word.schema');
const KnowledgeSchema = require('./Knowledge.schema');

mongoose.plugin(require('mongoose-delete'));

const Question = mongoose.model('Question', QuestionSchema);
const User = mongoose.model('User', UserSchema);
const Word = mongoose.model('Word', WordSchema);
const Knowledge = mongoose.model('Knowledge', KnowledgeSchema);

module.exports = {
  Question,
  User,
  Word,
  Knowledge
};
