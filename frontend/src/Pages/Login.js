import Header from "../Common/Header";
import { useNavigate} from "react-router-dom";

import "./Login.css"
import { useState } from "react";

const Login = () =>{

    let navigate=useNavigate();
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");


    let login = async()=>{
        try{
          
         let result = await fetch("http://localhost:5000/login",{
             method:"post",
             body: JSON.stringify({email,password}),
             headers:{
                 "Content-Type":"application/json"
             }
         });
         result =await result.json();
         console.log(result)
         if (result.email){
             localStorage.setItem("user", JSON.stringify(result));
             navigate("/userhome") ;
         }
        }catch{
         alert("Email or Password does not match")
        }
 }

    return(
  
      <div>
            <Header/>
            
            <div className="container login-main">
            
               <div className="login-style">
                 <u> <h2 className="login-heading"> Teacher Login</h2></u> 
                  <div className="login-form">
              
                 <input type="email" placeholder="Enter Your Email" className="inputs"
                 onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                 <input type="password" placeholder="Enter Your Password"className="inputs" 
                 onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                 <button type="submit" className="login-button" onClick={login} >Login</button>
        
                </div>
             </div>

            </div>

        
        </div>
    )
}

   

    

export default Login;