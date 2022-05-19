const { json } = require("express");
const {validationResult} = require("express-validator");
const fs = require ('fs');
const path = require ('path')
const userDataBase = require ('../src/data/userDataBase.json')
const storage = require('../middlewares/storage')

const mainControllers = {
  index: (req, res) => {
    res.render("index")
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

  },

  detalle:(req, res)=>{
    res.render("detalle");
  },

  cart:(req, res)=>{
    res.render("cart");
  },

  login: (req, res)=>{
    res.render("login");
  },

  //registerEdit: (req, res)=>{
    //res.render("registerEdit");
  //} //agrego ruta en el controlador para renderizar la pagina register edit

};


module.exports = mainControllers;