const express= require('express')
const app=express()
const cors = require('cors')
const {getProducts} =require('./db')
require('dotenv').config()
const port = process.env.PORT || 3000

// using cors so that data can be accessed by frontend
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Working now")
})

// showing data products data on /product endpoint
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