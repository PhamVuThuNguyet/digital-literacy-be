const { Schema } = require('mongoose');
const { hash } = require('../../utils/bcrypt.utils');
const { VARIABLES } = require('../../constants');

const UserSchema = new Schema(
  {
    username: { type: String, required: true, index: true },
    password: { type: String, slug: 'title', index: true, unique: true },
    name: { type: String, index: true, default: '' },
    role: { type: String, default: 'user' },
    avatar: { type: String, default: VARIABLES.DEFAULT_AVATAR },
    birthday: { type: String, default: '' },
    email: { type: String, default: '' },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function (next) {
  const user = this;
  user.password = hash(user.password);
  next();
});

module.exports = UserSchema;
