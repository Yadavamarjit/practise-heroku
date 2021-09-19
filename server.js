const express= require('express')
const app=express()
const config = require('./config')
// require('dotenv').config()
const port = config.app.port || 3000


app.get('/',(req,res)=>{
    res.send("Working now")
})
app.get('/products',(req,res)=>{
    res.send("product page")
})

app.listen(port,()=>{
    console.log("Listening on port",port)
})