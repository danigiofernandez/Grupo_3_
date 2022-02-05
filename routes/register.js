const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/register', mainControllers.register);

module.exports = router;