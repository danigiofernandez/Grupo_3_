const express = require('express');
const router = express.Router();
const validations = require ('../Middlewares/validations')
const mainControllers = require('../controllers/mainControllers');
const { body } = require('express-validator');
const usersMiddleware = require('..//Middlewares/users')

router.get('/register', mainControllers.register);
router.post('/register', validations, usersMiddleware, mainControllers.create);

module.exports = router;