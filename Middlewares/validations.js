const {body} = require ('express-validator');

const validationCreateUser = [
    body ("nombre").notEmpty().withMessage('Debes ingresar un nombre').bail(),
    body ("apellido").notEmpty().withMessage('Debes ingresar un apellido').bail(),
    body ("direccion").notEmpty().withMessage('Debes ingresar una dirección válida').bail(),
    body ("email").notEmpty().withMessage('Debes ingresar un email válido').bail().isEmail(),
    body ("password").notEmpty().withMessage('Debes ingresar una contraseña válida').bail(),
    body ("confirmPassword").notEmpty().withMessage('Debes ingresar un una contraseña válida').bail(),
]

module.exports = validationCreateUser;