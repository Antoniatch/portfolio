const express = require('express');
const projectsRouter = express.Router();
const Projects = require('../models/projects');

projectsRouter.get('/', async (req, res) => {
  try {
    const [results] = await Projects.findMany();
    res.status(200).json(results);
  } catch (err) {
    console.log(err);
    res.status(500).send('Oops, an error occurred !');
  }
});

module.exports = projectsRouter;
