const mainControllers = {
    index: (req, res) => {
      res.render("index");
    },

    register: (req,res)=>{
      res.render("register");
    },
    
};



module.exports = mainControllers;