const express = require('express');
const router = express.Router();
const validations = require ('../Middlewares/validations')
const mainControllers = require('../controllers/mainControllers');
const { body } = require('express-validator');
//const usersMiddleware = require('..//Middlewares/users')
const multer = require('multer');
const uploadFile = require ('../middlewares/storage')


router.get('/product', mainControllers.product);
router.post('/newProduct', uploadFile.single('imagenUsuario'), validations, mainControllers.create);

module.exports = router;