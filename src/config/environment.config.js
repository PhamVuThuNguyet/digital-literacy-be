const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
  PORT: Joi.number().default(3001),
  MONGO_USERNAME: Joi.string().required().description('MongoDB username'),
  MONGO_PASSWORD: Joi.string().required().description('MongoDB password'),
  JWT_SECRET: Joi.string().required().description('JWT Secret'),
  JWT_TTL: Joi.string().required().description('JWT time to live'),
  JWT_REFRESH_TTL: Joi.string().required().description('JWT refresh time to live'),
});

const { value: envVars, error } = envVarsSchema.validate(process.env);

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoose: {
    url: `mongodb+srv://${envVars.MONGO_USERNAME}:${envVars.MONGO_PASSWORD}@vku.ubovshq.mongodb.net/literacy?retryWrites=true&w=majority`,
  },
  JWT_SECRET: envVars.JWT_SECRET,
  JWT_TTL: envVars.JWT_TTL,
  JWT_REFRESH_TTL: envVars.JWT_REFRESH_TTL,
};
