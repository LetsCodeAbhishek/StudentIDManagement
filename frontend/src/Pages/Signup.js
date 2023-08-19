import "./Signup.css";
import Header from "../Common/Header";
import { useState } from "react";
import { useNavigate } from "react-router";


const Signup = () =>{

    let navigate=useNavigate();
  let [name,setName]=useState("");
  let [address,setAddress]=useState("");
  let [contact,setContact]=useState("");
  let [email,setEmail]=useState("");
  let [gender,setGender]=useState("");
  let [password,setPassword]=useState("");

  let register = async() =>{
    console.log(name,email,contact,address,password,gender);
    let result = await fetch("http://localhost:5000/signup",{
        method:"post",
        body: JSON.stringify({name,email,contact,gender,address,password}),
        headers:{
            "Content-Type":"application/json"
        }
    });
    result =await result.json();
    if (result){
        alert("Signup Successfully ✌️");
        navigate("/login");
    }else{
        alert("Signup Failed");
    }
}





    return(
        <div>
            <Header/>
            
            <div className="container sign-main">
                
             <div className="sign-base">
             <label className="sign-label">Name</label>
                <input type="text" placeholder="Enter your Name" className="sign-input" required 
                onChange={(e)=>setName(e.target.value)} value={name}></input>

                <label className="sign-label">Address</label>
                <input type="text" placeholder="Enter your Address"className="sign-input" required 
                onChange={(e)=>setAddress(e.target.value)} value={address}></input>

                <label className="sign-label">Contact</label>
                <input type="number" placeholder="Enter your Contact" className="sign-input" required
                onChange={(e)=>setContact(e.target.value)} value={contact}></input>

                <label className="sign-label">Email</label>
                <input type="email" placeholder="Enter your Email" className="sign-input"  required
                onChange={(e)=>setEmail(e.target.value)} value={email}></input>

                <label className="sign-label">Gender</label>
                <br></br>
                <select className="sign-input" onChange={(e)=>setGender(e.target.value)} value={gender} required> 
 
                    <option selected>Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>

                </select>

                <label className="sign-label">Password</label>
                <input type="password" placeholder="Enter your Password" className="sign-input" required
                onChange={(e)=>setPassword(e.target.value)} value={password}></input>

                <br></br>
                <button type="submit" className="sign-button" onClick={register}>Registration</button>
             </div>


            </div>
        

        </div>
    )

}

export default Signup;