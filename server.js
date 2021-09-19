const express= require('express')
const app=express()
require('dotenv').config()
const port = process.env.PORT || 3000
console.log(process.env.PORT)

app.get('/',(req,res)=>{
    res.send("Working now")
})

app.listen(port,()=>{
    console.log("Listening on port",port)
})