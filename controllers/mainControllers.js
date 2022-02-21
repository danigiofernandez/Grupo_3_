const mainControllers = {
  index: (req, res) => {
    res.render("index")
  },

  registro: (req, res)=>{
     res.render("register");
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