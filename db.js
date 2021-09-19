require("dotenv").config()
const id=process.env.AWS_ID
const secret=process.env.AWS_SECRET
const region=process.env.AWS_DEFAULT_REGION
console.log(id,region,secret)