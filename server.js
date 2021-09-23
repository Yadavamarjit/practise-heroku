const express= require('express')
const app=express()
const cors = require('cors')
const {getProducts, addClick,getClicks,addProduct,deleteProductbyId} =require('./db')
const port = process.env.PORT || 3000

// using cors so that data can be accessed by frontend
app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Working now")
})

// product will be added to db from endpoint /addoroducts
app.post('/addproducts',async(req,res)=>{
    const {description,id,image,title}=req.body
    try{
        if(!description||!id||image||title){
            res.json({msg:"Please provide comlpete details about product"})
        }else{
            addProduct(req.body)
            res.send(req.body.description)
        }
    }
    catch(error){
        res.json({msg:"An error occured"})
    }
})
// showing products data on /product endpoint
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

app.post('/addproducts',async(req,res)=>{
    const {description,id,image,title}=req.body
    try{
        if(!description||!id||image||title){
            res.json({msg:"Please provide comlpete details about product"})
        }else{
            addProduct(req.body)
            res.send(req.body.description)
        }
    }
    catch(error){
        res.json({msg:"An error occured"})
    }
})

// for deleting data on /product endpoint
app.delete('/products',async(req,res)=>{
    try{
        console.log(req.body.id)
        deleteProductbyId(req.body.id)
        res.json({msg:"deleted"})
    }
    catch (error){
        console.log(err)
        res.status(500).json({err:"Something went wrong"})
    }
})

// firing put request to add clicks
app.put('/products',async(req,res)=>{
    
    getClicks().then(result=>{
        req.body.clicked=result
        addClick(req.body)
    })

    res.json({msg:"Done"})
})

// endpoin to get all clicks
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
