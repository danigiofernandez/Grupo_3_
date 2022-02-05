const express = require('express');
const router = express.Router();

router.get('/login',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
});

module.exports = router;