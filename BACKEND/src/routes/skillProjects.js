const express = require('express');
const skillProjectsRouter = express.Router();

const { PrismaClient } = require("@prisma/client");
const { skill_projects } = new PrismaClient();


skillProjectsRouter.get('/', async (req, res) => {
  skill_projects
    .findMany({
      include: {
        project: true,
        skill: true
      }
    })
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
      .createMany({ data: skillProject })
      .then((newSkillProject) => {
        res.status(200).json(newSkillProject)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error creating the project-skill couple(s)')
    });
});


module.exports = skillProjectsRouter;
