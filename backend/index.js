

const express= require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Student");
app.use(express.json());

const cors = require("cors");
app.use(cors());

let sign=require("./sign");
let detail =require("./detail");

app.post("/signup",async(req,res)=>{

    let result =new sign(req.body);
    let data= await result.save();
    res.send(data);
})

app.post("/login",async(req,res)=>{
    if (req.body.email && req.body.password){
        let data =await sign.findOne(req.body).select("-password");

        if(data){
            res.send(data);
        }
        else{
            res.send("email and password not matched");
        }
    }else{
        res.send("Provide both Email and Password")
    }

});

app.post("/adetails",async(req,res)=>{

    let result =new detail(req.body);
    let data= await result.save();
    res.send(data);
})

app.get("/getdetails/:email", async(req,res)=>{
    let data = await detail.find({email:req.params.email});
    res.send(data);
} );


app.get("/editdetails/:id", async(req,res)=>{
    let data =await detail.findOne({_id:req.params.id});
    res.send(data);
})

app.put("/updatedetails/:id", async(req,res)=>{
    let data =await detail.updateOne(
        { _id : req.params.id},
        {$set:req.body}
    );
    res.send(data);
})

app.delete("/deletedetail/:id", async(req,res)=>{
    let data =await detail.deleteOne({_id:req.params.id});
    res.send(data);
})

// app.get("/searchdetail/:key", async(req,res)=>{
//     let result = await detail.find({
//         "$or":[
//             { course: {$regex:req.params.key ,$options:"i"}}
//         ]
//     });
//     res.send(result);
// })


app.listen(5000);