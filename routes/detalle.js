const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');
const path = require('path')

router.get('/detalle/:id', mainControllers.detalle);

module.exports = router;