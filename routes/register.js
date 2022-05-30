const express = require('express');
const router = express.Router();
const validations = require ('../Middlewares/validations')
const mainControllers = require('../controllers/mainControllers');
const { body } = require('express-validator');
//const usersMiddleware = require('..//Middlewares/users')
const multer = require('multer');
const uploadFile = require ('../middlewares/storage')


router.get('/register', mainControllers.register);
//router.post('/register', uploadFile.single('imagenUsuario'), validations, mainControllers.product); dejo comentada esta ruta, renderiza la vista de new product y no es correcto.

//insertar la ruta para llamar al controlador de userController

module.exports = router;