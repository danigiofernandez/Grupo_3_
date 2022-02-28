const express = require('express');
const router = express.Router();
const validations = require ('../Middlewares/validations')
const mainControllers = require('../controllers/mainControllers');
const { body } = require('express-validator');

router.get('/register', mainControllers.register);
router.post('/register', validations, mainControllers.create);

module.exports = router;