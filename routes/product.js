const express = require('express');
const router = express.Router();
const validations = require ('../Middlewares/validations')
const productControllers = require('../controllers/productControllers');
const { body } = require('express-validator');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '../public/images')
    },
    filename: function(req,file,cb){
        cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
        
        /* fieldname	Nombre de campo especificado en el formulario	
         originalname	Nombre del archivo en la computadora del usuario */
    }
})

var upload = multer({ storage: storage });
// Creacion:
router.get('/crear', productControllers.crear);
router.post('/crear', upload.single('image'), validations, productControllers.guardar);
//Lectura:
router.get('/', productControllers.vertodos) 
//router.post('/', upload.single('image'), mainControllers.uploadProduct)


module.exports = router;