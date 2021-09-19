const express= require('express')
const app=express()
require('dotenv').config()
const {getProducts} =require('./db')
const port = process.env.PORT || 3000
console.log(process.env.PORT)

app.get('/',(req,res)=>{
    res.send("Working now")
})
app.get('/products',async(req,res)=>{
    try{
        const product =await getProducts()
        res.json(product)
    }
    catch (error){
        console.log(err)
        res.status(500).json({err:"Something went wrong"})
    }
})

app.listen(port,()=>{
    console.log("Listening on port",port)
})