const express = require('express');
const router = express.Router();
const validations = require ('../Middlewares/validations')
const mainControllers = require('../controllers/mainControllers');

router.get('/register', mainControllers.registro);
router.post('/register', validations, mainControllers.registro);

module.exports = router;