const express=require('express');
const path=require('path');
const app=express();

const publiPath=path.resolve(__dirname,'./public');
app.use(express.static(publiPath));

app.listen(3000,()=>{
    console.log('Servidor Corriendo');
});

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
});