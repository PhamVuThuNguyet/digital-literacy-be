const { Schema } = require('mongoose');

const KnowledgeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    data: { type: [Schema.Types.Mixed], default: [] },
  },
  {
    timestamps: true,
  }
);

module.exports = KnowledgeSchema;
