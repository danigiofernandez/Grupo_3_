const {body} = require ('express-validator');

const validationCreateUser = [
    body ("nombre").notEmpty().withMessage('Debes ingresar un nombre').bail(),
    body ("apellido").notEmpty().withMessage('Debes ingresar un apellido').bail(),
    body ("direccion").notEmpty().withMessage('Debes ingresar una dirección').bail(),
    body ("email").notEmpty().withMessage('Debes ingresar un email').bail().isEmail().withMessage('Debes ingresar un formato de email válido'),
    body ("password").notEmpty().withMessage('Debes ingresar una contraseña').bail(),
    body ("confirmPassword").notEmpty().withMessage('Debes ingresar una contraseña').bail(),
]

module.exports = validationCreateUser;