const AWS = require('aws-sdk')
require("dotenv").config()
const id=process.env.AWS_ID
const secret=process.env.AWS_SECRET
const region=process.env.AWS_DEFAULT_REGION
console.log(id,region,secret)


// Aws congfiguration
AWS.config.update({
    region:region,
    accessKeyId:id,
    secretAccessKey:secret
})


const dynamoClient = new AWS.DynamoDB.DocumentClient()

// declaring assigning table name in varable Table_Name
const Table_Name = 'image-api'

// function for providing all products
const getProducts =async ()=>{
    const params ={
        TableName:Table_Name
    }
    const product =await dynamoClient.scan(params).promise()
    console.log(product)
    return product
}
getProducts()
// function for adding product

const addProduct = async (products)=>{
    const params = {
        TableName:Table_Name,
        Item:products
    }
    return await dynamoClient.put(params).promise()
}

// function for getting single product
const getProductbyId = async (id)=>{
    const params = {
        TableName:Table_Name,
        Key:{
            id
        }
    }
    return await dynamoClient.get(params).promise()
}


module.exports = {
    dynamoClient,
    getProducts,
    getProductbyId,
    addProduct
}
