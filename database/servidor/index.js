const express       = require('express');
const logger        = require('morgan');
const bodyParser    = require('body-parser');
// Esta es la entrada de la aplicación.
const http = require('http');
// Configurar la aplicación con Express.
const app = express();
// Registrar las solicitudes en la consola.
app.use(logger('dev'));
// Analizar los datos de las solicitudes entrantes (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Configurar una ruta general predeterminada que envíe un mensaje en formato JSON.
require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
     message: 'Haz realizado una petición al servidor.',
}));
const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;