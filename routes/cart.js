const express = require('express');
const router = express.Router();

router.get('/cart',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/cart.html'))
});

module.exports = router;