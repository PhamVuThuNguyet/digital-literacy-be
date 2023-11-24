const express = require('express');
const questionRoutes = require('./question.route');
const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');
const wordRoutes = require('./word.route');
const knowledgeRoutes = require('./knowledge.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/questions',
    route: questionRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/words',
    route: wordRoutes,
  },
  {
    path: '/knowledge',
    route: knowledgeRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
