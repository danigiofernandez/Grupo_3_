const express = require('express');
const router = express.Router();

router.get('/detalle',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/detalle.html'))
});

module.exports = router;