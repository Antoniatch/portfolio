const projectsRouter = require('./projects');
const skillsRouter = require('./skills');
const skillProjectsRouter = require('./skillProjects');

const setupRoutes = (app) => {
  app.use('/projects', projectsRouter);
  app.use('/skills', skillsRouter);
  app.use('/skill-projects', skillProjectsRouter)
};

module.exports = setupRoutes;
