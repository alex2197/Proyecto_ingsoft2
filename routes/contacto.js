const express = require('express')
const User = require('../database/models/Clientes')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Contacto');
})

router.post('/', (req, res) => {
    User.create({
        firstName:"Aaron",
        lastName:"Valadez"
    }).then(user => {
        res.json(user);
    })
})

module.exports = router;