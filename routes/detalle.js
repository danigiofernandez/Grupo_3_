const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

//router.get('/detalle', mainControllers.detalle);
router.get('/detalle/:id/', mainControllers.detalle)
module.exports = router;