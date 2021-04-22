const express = require('express')
const User = require('../database/models/Clientes')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('LoginFinal')
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
        if(email == req.body.email && password == req.body.password){
            res.json("Gracias por loggearte, empieza a navegar")
        }  
        else{
            res.json("Intenta de nuevo por favor")
        }
        res.json(user);
    });

    
})
router.post('/RegistroUsuarios', async (req, res) => {
 
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
 
    User.create({ 
 
         username: username,
         password: password,
         email: email  
     });
 
 })

module.exports = router