const express = require('express')
const User = require('../database/models/Clientes')
const router = express.Router();

router.get('/Login', (req, res) => {
    res.render('Login');
})

router.get('/Registro', (req, res) => {
    res.render('Registro');
})

router.post('/RegistrUsuarios', async (req, res) => {
 
   var username = req.body.username;
   var password = req.body.password;
   var email = req.body.email;

   User.create({ 

        username: username,
        password: password,
        email: email  
    });

})

router.post('/ValidarUsuario', async (req, res) => {
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