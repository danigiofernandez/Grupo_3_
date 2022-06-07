const express = require('express');
const router = express.Router();
const validations = require ('../Middlewares/validations')
const productControllers = require('../controllers/productControllers');
const { body } = require('express-validator');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname,'../public/images'))
    },
    filename: function(req,file,cb){
        const newFilename = 'nuevo' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename)
        
        /* fieldname	Nombre de campo especificado en el formulario	
         originalname	Nombre del archivo en la computadora del usuario */
    }
})

const upload = multer({ storage });
// Creacion:
router.get('/crear', productControllers.crear);
router.post('/crear', upload.single('image'), validations, productControllers.guardar);
//Lectura:
router.get('/', productControllers.vertodos) 
//Detalle:
router.get('/detalle/:id', productControllers.detalle)
//actualizar
router.get('/detalle/editar/:id', productControllers.editar)
router.post('/detalle/editar/:id', productControllers.actualizar)
//borrar:
router.post('/detalle/borrar/:id', productControllers.borrar)
//router.post('/', upload.single('image'), mainControllers.uploadProduct)


module.exports = router;