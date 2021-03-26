const express = require('express')
const User = require('../database/models/Clientes')
const router = express.Router();


router.get('/', (req, res) => {
    res.render('Login');
})

router.post('/', async (req, res) => {
    User.findAll({
        where: {
          username: req.body.username,
          password: req.body.password
        }
      }).then(user => {
        res.json(user);
    });
})

router.get('/citasDelCliente', (req, res) => {
    res.render('citasDelUsuario')
})






module.exports = router;