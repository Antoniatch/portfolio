const express = require('express');
const loginRouter = express.Router();

const { PrismaClient } = require("@prisma/client");
const { login } = new PrismaClient();

loginRouter.post('/', async (req, res) => {
    const id = req.body.user;
    const password = req.body.password;

    login.findUnique({
        where: {
            user: id
        }
    })
    .then((user) => {
        if(!user) {
            return res.send({message: "Cannot find user"})
        } else {
            if(password === 'wcschool') {
                res.status(200).send('Welcome !')
            } else {
                res.send({message: 'Not allowed'})
            }
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({message: err})
    })
})

module.exports = loginRouter;
