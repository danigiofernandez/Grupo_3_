//creo ruta register edit 
const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/registerEdit', mainControllers.registerEdit);

module.exports = router;