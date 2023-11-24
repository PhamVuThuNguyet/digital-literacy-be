const { Schema } = require('mongoose');

const QuestionSchema = new Schema(
  {
    question: { type: String, required: true, index: true },
    choices: { type: [String], default: [] },
    answers: { type: [String], default: [] },
    isShow: { type: Boolean, required: true, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = QuestionSchema;
