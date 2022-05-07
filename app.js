const express=require('express');
const path=require('path');
const app=express();
const indexRoutes = require ('./routes/index');
const registerRoutes = require('./routes/register');
const cartRoutes = require('./routes/cart');
const detalleRoutes = require('./routes/detalle');
const loginRoutes = require ('./routes/login');
const registereditRoutes = require('./routes/registeredit') //agrego require de la nueva ruta
const publiPath=path.resolve(__dirname,'./public');
const methodOverride = require('method-override') //permite manejar peticiones PUT y DELETE. para ello se instala el paquete npm install method-override --save

app.use(express.static(publiPath));
app.use(express.urlencoded({ extended:false}));// permite manejar peticiones POST 
app.use(express.json()); //devuelve la peticion POST en formato json
app.set("view engine","ejs");
app.use(methodOverride('_method')) // metodo para poder manejar peticiones PUT y DELETE

app.listen(3000,()=>{
    console.log('Servidor Corriendo');
});

app.use('/', indexRoutes);

app.use('/', registerRoutes);

app.use('/', cartRoutes );

app.use('/', detalleRoutes);

app.use('/', loginRoutes);

app.use('/', registereditRoutes) // app use de la nueva ruta register edit

app.use((req,res,next)=>{
      res.status(404).render("not-found");
    }
    );

