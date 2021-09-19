require('dotenv').config()
const{
    Port,
    AWS_ID,
    AWS_SECRET,
    AWS_DEFAULT_REGION,
}=process.env
const config ={
    app:{
        port:Port
    },
    db:{
        Id:AWS_ID,
        SECRET:AWS_SECRET,
        REGION:AWS_DEFAULT_REGION
    }
}
module.exports = config