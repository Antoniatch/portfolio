const express = require('express');
const skillsRouter = express.Router();

const { PrismaClient } = require("@prisma/client");
const { skills } = new PrismaClient();


skillsRouter.get('/', async (req, res) => {
  skills
    .findMany({
      include: {
        projects: true
      }
    })
    .then((skill) => {
      res.status(200).json(skill);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error retrieving the skills');
    });
});

skillsRouter.get('/:id', async (req, res) => {
    const {id} = req.params;
    skills
      .findUnique({
        where: {
          id: parseInt(id),
        }
      })
      .then((skill) => {
        res.status(200).json(skill)
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send('Error retrieving the skill')
      })
  })
  
skillsRouter.post('/', async (req, res) => {
  const skill = req.body;
  skills
    .create({ data: skill })
    .then((newSkill) => {
      res.status(200).json(newSkill)
    })
})

skillsRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  skills
    .findUnique({
      where: {
        id: parseInt(id),
      }
    })
    .then((skill) => {
      if (skill) {
        skills
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
        res.status(404).send('Error retrieving the skill from database')
      }
    })
})

skillsRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    skills
    .findUnique({
        where: {
            id: parseInt(id)
        }
    })
    .then((skill) => {
        if (skill) {
            skills
                .delete({
                    where: {
                    id: parseInt(id),
                    },
                })
                .then(() => {
                    res.status(201).send('Skill deleted with success')
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500)
                })
        }
    })
})


module.exports = skillsRouter;
