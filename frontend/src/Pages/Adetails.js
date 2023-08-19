import "./Adetails.css"
import Userheader from "../Common/Userheader";
import { useState } from "react";

const Adetails = () =>{

    let [name,setName] =useState("");
    let [rollno,setRno]= useState("");
    let [enrollment,setEno]= useState("");
    let [course,setCourse]= useState("");
    let [address,setAddress]= useState("");
    let [contact,setContact]= useState("");
    let [dob,setDob]= useState("");
    let [image,setImage]= useState("");
    let [semester,setSem]= useState("");
    let [gender,setGender]= useState("");
    let [email,setEmail]= useState("");

    let convert =(e)=>{
        var reader =new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload =() =>{
            // console.log(reader.result);
            setImage(reader.result);
        }
    };
    let adetail = async()=>{
        // console.log(rno,price,type,status,image);
        let result= await fetch("http://localhost:5000/adetails",{
            method:"post",
            corssDomain:true,
            body: JSON.stringify({name,rollno,enrollment,course,address,contact,dob,image,semester,gender,email}),
            headers:{
                "Content-type":"application/json",
                "Access-Control-Allow-Origin":"*",
            },
        });
        result =await result.json();
        if(result){
            alert(" Your iD Successfully Created");
        }
    }



    return(
        <div>
            <Userheader/>
            
            <div className="container">
           <div className="row addDetail-base">
                <div className="col-md-6 addDetail-main">
                    <input type="text" placeholder="Enter Full Name" className="addDetail-input" 
                      onChange={(e)=>setName(e.target.value)} value={name}></input>
                    <input type="number" placeholder="Enter Roll No." className="addDetail-input" 
                       onChange={(e)=>setRno(e.target.value)} value={rollno}></input>
                    <input type="text" placeholder="Enter Enrollment No." className="addDetail-input" 
                     onChange={(e)=>setEno(e.target.value)} value={enrollment}></input>
                    <input type="text" placeholder="Enter Course" className="addDetail-input" 
                       onChange={(e)=>setCourse(e.target.value)} value={course}></input>
                     <input type="text" placeholder="Enter Address" className="addDetail-input" 
                        onChange={(e)=>setAddress(e.target.value)} value={address}></input>
                     <input type="number" placeholder="Enter Contact No." className="addDetail-input" 
                       onChange={(e)=>setContact(e.target.value)} value={contact} ></input>

                    <label><b>Enter Your Date Of Birth</b></label>
                     <input type="date" className="addDetail-input" 
                     onChange={(e)=>setDob(e.target.value)} value={dob}  ></input>

                    <label><b>Upload Your Photo</b></label>
                    <input type="file" accept=".png, .jpg" className="addDetail-input" onChange={convert}></input>

                    <select className="addDetail-input" onChange={(e)=>setSem(e.target.value)} value={semester}>
                        <option hidden>Select Semester</option>
                        <option value="1 Semester"> 1 Semester</option>
                        <option value="2 Semester"> 2 Semester</option>
                        <option value="3 Semester"> 3 Semester</option>
                        <option value="4 Semester"> 4 Semester</option>
                        <option value="5 Semester"> 5 Semester</option>
                        <option value="6 Semester"> 6 Semester</option>
                        <option value="7 Semester"> 7 Semester</option>
                        <option value="8 Semester"> 8 Semester</option>
                    </select>
                    <select className="addDetail-input" onChange={(e)=>setGender(e.target.value)} value={gender}>
                        <option hidden> Select Gender</option>
                        <option value="male"> Male</option>
                        <option value="female"> Female</option>
                    </select>
                    <input type="email" placeholder="Teacher Email Id " className="addDetail-input" 
                       onChange={(e)=>setEmail(e.target.value)} value={email} ></input>

                    <button className="addDetail-button" onClick={adetail} type="submit">Add Detail</button>
                </div>
                
            </div>
           </div>


        </div>
    )
}

export default Adetails;