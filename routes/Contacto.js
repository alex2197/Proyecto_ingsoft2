const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Contacto');
})

module.exports = router;