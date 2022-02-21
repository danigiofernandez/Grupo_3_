const express=require('express');
const path=require('path');
const app=express();
const indexRoutes = require ('./routes/index');
const registerRoutes = require('./routes/register');
const cartRoutes = require('./routes/cart');
const detalleRoutes = require('./routes/detalle');
const loginRoutes = require ('./routes/login');

const publiPath=path.resolve(__dirname,'./public');
app.use(express.static(publiPath));

app.set("view engine","ejs");

app.listen(3000,()=>{
    console.log('Servidor Corriendo');
});

app.use('/', indexRoutes);

app.use('/', registerRoutes);

app.use('/', cartRoutes );

app.use('/', detalleRoutes)


app.use('/', loginRoutes)

app.use('/', loginRoutes);

app.use((req,res,next)=>{
      res.status(404).render("not-found");
    }
    );

