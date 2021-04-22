const express = require('express')
const User = require('../database/models/Contactos')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Contacto');
})

router.post('/', (req, res) => {
    var fullName = req.body.fullname;
    var email = req.body.email; 
    var phone = req.body.phone;
    var affair = req.body.affair;
    var message = req.body.message;
    User.create({
        fullname: fullName,
        email: email,
        phone: phone,
        affair: affair,
        message: message
    }).then(user => {
        res.render('index')
    })
})

module.exports = router;