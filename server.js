const express= require('express')
const app=express()
const cors = require('cors')
const {getProducts, addClick,getClicks} =require('./db')
require('dotenv').config()
const port = process.env.PORT || 3000

// using cors so that data can be accessed by frontend
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
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

app.put('/products',async(req,res)=>{
    
    res.json({msg:"Done"})
    getClicks().then(result=>{
        req.body.clicked=result
        addClick(req.body)
    })
})

app.get('/click',async(req,res)=>{
    try{
        const clicks =await getClicks()
        res.json({total_clicks:clicks})
    }
    catch (error){
        console.log(err)
        res.status(500).json({err:"Something went wrong"})
    }
})


app.listen(port,()=>{
    console.log("Listening on port",port)
})