

let mongoose =require("mongoose");


const userSchema =new mongoose.Schema({
   name:String,
   rollno:Number,
   enrollment:String,
   course:String,
   address:String,
   contact:Number,
   email:String,
   dob:String,
   image:String,
   semester:String,
   gender:String

})

module.exports = mongoose.model("detail",userSchema);