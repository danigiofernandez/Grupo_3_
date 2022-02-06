const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/register', mainControllers.registro);

module.exports = router;