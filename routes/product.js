const express = require('express');
const router = express.Router();
const validations = require ('../Middlewares/validations')
const mainControllers = require('../controllers/mainControllers');
const { body } = require('express-validator');
const multer = require('multer');
const uploadFile = require ('../middlewares/storage')
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

router.get('/newproduct', mainControllers.product);
router.post('/', upload.single('image'), mainControllers.uploadProduct)
//router.post('/newProduct', uploadFile.single('imagenUsuario'), validations, mainControllers.product);

module.exports = router;