const projectsRouter = require('./projects');

const setupRoutes = (app) => {
  app.use('/projects', projectsRouter);
};

module.exports = setupRoutes;
