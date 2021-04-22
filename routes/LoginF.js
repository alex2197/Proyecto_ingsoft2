const express = require('express')
const User = require('../database/models/Clientes')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('LoginFinal')
})

router.post('/RegistroUsuarios', async (req, res) => {
 
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
 
    User.create({ 
         username: username,
         password: password,
         email: email  
     }).then(user => {
         res.send("Se creo usuario existosamente");
     })
 
 })

 router.post('/ValidarUsuario', async (req, res) => {
    
    var password = req.body.password;
    var email = req.body.email;

    User.findAll({
        where: {
          email: email,
          password: password
        }
      }).then(user => {
        res.json(user);
    });  
})

module.exports = router