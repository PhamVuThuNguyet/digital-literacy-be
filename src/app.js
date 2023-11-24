const express = require('express');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const httpStatus = require('http-status');
const { MESSAGES } = require('./constants');
const routes = require('./routes/v1');

const app = express();

app.use(morgan('tiny'));
app.use(compression());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.use((req, res, next) => {
  const error = new Error();
  error.statusCode = httpStatus.NOT_FOUND;
  error.statusMessage = MESSAGES.NOT_FOUND;
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  const statusMessage = error.statusMessage || error || MESSAGES.INTERNAL_SERVER_ERROR;

  res.statusMessage = statusMessage;
  res.status(statusCode).send(statusMessage);
});

module.exports = app;
