
let mongoose =require("mongoose");

const userSchema =new mongoose.Schema({
    name:String,
    address:String,
    contact:Number,
    email:String,
    gender:String,
    password:String

});
module.exports =mongoose.model("signupData",userSchema);