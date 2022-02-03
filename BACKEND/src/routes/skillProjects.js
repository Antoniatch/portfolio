const express = require('express');
const skillProjectsRouter = express.Router();

const { PrismaClient } = require("@prisma/client");
const { skill_projects } = new PrismaClient();


skillProjectsRouter.get('/', async (req, res) => {
  skill_projects
    .findMany()
    .then((el) => {
      res.status(200).json(el);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error retrieving the array');
    });
});

skillProjectsRouter.post('/', async (req, res) => {
    const skillProject = req.body;
    skill_projects
      .create({ data: skillProject })
      .then((newSkillProject) => {
        res.status(200).json(newSkillProject)
    })
})


module.exports = skillProjectsRouter;
