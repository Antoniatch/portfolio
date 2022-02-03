const express = require('express');
const projectsRouter = express.Router();

const { PrismaClient } = require("@prisma/client");
const { projects } = new PrismaClient();


projectsRouter.get('/', async (req, res) => {
  projects
    .findMany({
      include: {
        skills: true
      }
    })
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error retrieving the projects');
    });
});

projectsRouter.get('/:id', async (req, res) => {
  const {id} = req.params;
  projects
    .findUnique({
      where: {
        id: parseInt(id),
      }, include: {
        skills: true
      }
    })
    .then((project) => {
      res.status(200).json(project)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error retrieving the project')
    })
})

projectsRouter.post('/', async (req, res) => {
  const project = req.body;
  projects
    .create({ data: project })
    .then((newProject) => {
      res.status(200).json(newProject)
    })
})

projectsRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  projects
    .findUnique({
      where: {
        id: parseInt(id),
      }
    })
    .then((project) => {
      if (project) {
        projects
          .update({
            where: {
              id: parseInt(id),
            },
            data: { ...update },
          })
          .then(() => {
            res.status(201).json({ ...update })
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send('Error updating the house')
          })
      } else {
        res.status(404).send('Error retrieving the project from database')
      }
    })
})

projectsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  projects
  .findUnique({
      where: {
          id: parseInt(id)
      }
  })
  .then((project) => {
      if (project) {
          projects
              .delete({
                  where: {
                  id: parseInt(id),
                  },
              })
              .then(() => {
                  res.status(201).send('Project deleted with success')
              })
              .catch((err) => {
                  console.log(err);
                  res.status(500)
              })
      }
  })
})

module.exports = projectsRouter;
