// Definir un middleware es simplemente definir una funcion. Al final tiene que llamar a "next" y al final se tiene que exportar (module.exports).
const fs = require('fs');

function logMiddleware(req, res, next) {
      fs.appendFile('log.txt', 'Se ingreso en la pagina' + req.url)

    next();
}

module.exports = logMiddleware;