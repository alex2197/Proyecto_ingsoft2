const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('clientes');
})

router.get('/citasDelCliente', (req, res) => {
    res.render('citasDelUsuario')
})


module.exports = router;