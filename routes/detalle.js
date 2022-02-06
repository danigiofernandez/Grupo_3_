const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/detalle', mainControllers.detalle);

module.exports = router;