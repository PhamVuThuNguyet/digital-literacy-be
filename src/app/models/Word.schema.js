const { Schema } = require('mongoose');

const WordSchema = new Schema(
  {
    special: { type: String, required: true, index: true },
    words: { type: [Schema.Types.Mixed], default: [] },
  },
  {
    timestamps: true,
  }
);

module.exports = WordSchema;
