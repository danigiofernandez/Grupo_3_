const {validationResult} = require("express-validator");

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

};


module.exports = mainControllers;