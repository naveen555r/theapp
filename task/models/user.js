const mongoose = require('mongoose')
const Userschema= mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    }
})
const userModel= mongoose.model("user001",Userschema)
module.exports= userModel;