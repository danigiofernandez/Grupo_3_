const fs = require ('fs');

function usersMiddleware (req,res,next){
    fs.appendFileSync('users.txt', 'Usuario: ' + req.body.nombre)
    next();
}

module.exports = usersMiddleware;