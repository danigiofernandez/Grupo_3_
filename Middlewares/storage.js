const multer = require("multer");
const path = require ('path')

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       const folder = path.join(__dirname, '../public/images/users')
       cb(null, folder); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })
  const uploadFile = multer({ storage: storage });

  module.exports = uploadFile