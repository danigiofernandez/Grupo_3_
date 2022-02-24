const {body} = require ('express-validator');

const validationCreateUser = [
    body ("nombreDeUsuario").notEmpty().withMessage('Debes ingresar un nombre válido').bail(),
    body ("apellido").notEmpty().withMessage('Debes ingresar un apellido válido').bail(),
    body ("direccion").notEmpty().withMessage('Debes ingresar una dirección válida').bail(),
    body ("email").notEmpty().withMessage('Debes ingresar un email válido').bail().isEmail(),
    body ("password").notEmpty().withMessage('Debes ingresar un nombre válido').bail(),
    body ("confirmPassword").notEmpty().withMessage('Debes ingresar un nombre válido').bail(),
]

module.exports = validationCreateUser;