const express=require('express');
const path=require('path');
const app=express();
const Sequelize = require('sequelize') 
const indexRoutes = require ('./routes/index');
const registerRoutes = require('./routes/register');
const cartRoutes = require('./routes/cart');
const detalleRoutes = require('./routes/detalle');
const loginRoutes = require ('./routes/login');
const registerEditRoutes = require('./routes/registeredit') 
//agrego require de la nueva ruta
const productRoutes = require('./routes/product');




//const publiPath=path.resolve(__dirname,'./public'); se comenta, no es necesario ya esta app.use(express.static(public)))
const methodOverride = require('method-override')
//permite manejar peticiones PUT y DELETE. para ello se instala el paquete npm install method-override --save
//const logMiddleware = require('./Middlewares/logmiddleware');// permite manejar el logmiddleware. Es el log de donde entro el usuario.
const session = require('express-session'); // requide de session

app.use(express.static('public')); // antes estaba pasado como parametro de static la variable "publipath"
app.use(express.urlencoded({ extended:false}));// permite manejar peticiones POST 
app.use(express.json()); //devuelve la peticion POST en formato json
app.set("view engine","ejs");
app.use(methodOverride('_method')) // metodo para poder manejar peticiones PUT y DELETE
//app.use(logMiddleware)// permite usar el middleware del log. Gracias a esto Cruza toda la aplicacion.
app.use(session ({secret : 'something',
    resave: true,
    saveUninitialized: true})) // agrego middleware para session. al final del app.js explicacion de resave y saveUninitialized. 
    //As the warnings say, the default values will change so they want to ensure that by setting the values explicitly now, you won't run into unexpected behavior when the defaults do change (in the near future).

    //defino los parámetros de conexion a la base de datos
    const sequelize = new Sequelize('hermaq', 'root', '',{
        host: 'localhost',
        dialect: 'mysql'
    })

    sequelize.authenticate()
    .then(()=>{
        console.log('La conexion a la base de datos OK')
    })
    .catch(error =>{
        console.log('EL ERROR DE CONEXION ES:')
    })

    
app.listen(3000,()=>{
    console.log('Servidor Corriendo');
});

app.use('/', indexRoutes);

app.use('/', registerRoutes);

app.use('/', cartRoutes );

app.use('/', detalleRoutes);

app.use('/', loginRoutes);

app.use('/', registerEditRoutes) // app use de la nueva ruta register edit

//importo para 
app.use('/', productRoutes);
//app.use('/user', userRoutes);
//app.use('/brand', brandRoutes);


app.use((req,res,next)=>{
      res.status(404).render("not-found");
    }
    );

    module.exports = app;
