const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');
const validations = require ('../Middlewares/validations');

router.get('/login',validations, mainControllers.login);

module.exports = router;