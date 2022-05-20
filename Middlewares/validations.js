const {body} = require ('express-validator');

const validationCreateUser = [
    body ("nombre").notEmpty().withMessage('Debes ingresar un nombre').isLength({ min: 2 }).bail(),
    body ("apellido").notEmpty().withMessage('Debes ingresar un apellido').isLength({ min: 2 }).bail(),
    body ("direccion").notEmpty().withMessage('Debes ingresar una dirección').bail(),
    body ("email").notEmpty().withMessage('Debes ingresar un email').bail().isEmail().withMessage('Debes ingresar un formato de email válido'),
    body ("password").notEmpty().withMessage('Debes ingresar una contraseña').isLength({ min: 8 }).withMessage('Debes ingresar una contraseña con al menos 8 carácteres').isAlphanumeric().bail(),
    body ("confirmPassword").notEmpty().withMessage('Debes ingresar una contraseña').isLength({ min: 8 }).isAlphanumeric().bail(),
    body('imagenUsuario').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png",".gif"];

        if(!file){
            throw new Error('Tienes que subir una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(',')}`);
            }
        }
        return true;
    })
]

module.exports = validationCreateUser;