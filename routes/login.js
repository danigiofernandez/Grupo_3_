const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/login', mainControllers.login);

module.exports = router;