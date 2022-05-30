const { json } = require("express");
const {validationResult} = require("express-validator");
const fs = require ('fs');
const path = require ('path')
//const db = require('../database/models');
//const sequelize = db.sequelize;
//const { Op } = require('sequelize');
//const moment = require('moment');

const userDataBase = require ('../src/data/userDataBase.json')
const storage = require('../middlewares/storage')
const productsFilePath = path.join(__dirname, '../src/data/productDataBase.json'); //variable para conectar el JSON de basedatos
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//variable para conectar el JSON de basedato
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");// para que se muestren decimales.

const mainControllers = {
  index: (req, res) => {
    // res.render("index")
    res.render('index', {products: products, toThousand}) // render para hacer la vista dinamica con ejs
  },

  register: (req, res)=>{
     res.render("register");
  },
  
  create: (req, res)=>{
    
    const resultValidation = validationResult (req);

    if (resultValidation.errors.length > 0) {
      return res.render('register',
      {errors: resultValidation.mapped(),})

    }else{
      const usuarios = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        email: req.body.email
        
      }
      
      const oldusers = fs.readFileSync(path.join(__dirname, '../src/data/userDataBase.json'), 'utf-8')
      const usersparser = JSON.parse(oldusers)
      usersparser.push(usuarios)
      fs.writeFileSync(path.join(__dirname, '../src/data/userDataBase.json'), JSON.stringify(usersparser), 'utf-8');
      
      res.redirect('/login');
      
    }
    if(req.file != undefined){
        avatar = req.file.filename;
    }else{
        avatar = 'default-image-png';
    }
    
  },

  detalle:(req, res)=>{ 
    const product = products.find(product=>product.id==req.params.id) // busqueda de productos por id
    res.render('detalle',{product,toThousand})
  },

  cart:(req, res)=>{
    //const element = document.getElementById('#cantidad').value
    const product = products.find(product=>product.id==req.params.id) // busqueda de productos por id
    res.render('cart',{product,toThousand})
  },

  login: (req, res)=>{
    res.render("login");
  },

  registerEdit: (req, res)=>{
    res.render("registerEdit");
  }, //agrego ruta en el controlador para renderizar la pagina register edit

  product: (req, res)=>{
    res.render("newProduct");
  }, //agrego ruta en el controlador para renderizar la pagina register edit


};


module.exports = mainControllers;