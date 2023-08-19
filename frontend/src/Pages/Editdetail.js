

import Userheader from "../Common/Userheader";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import "./Editdetail.css"


const Editdetail = () =>{

    
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
    let params = useParams();

    let navigate = useNavigate();

    useEffect(()=>{
        editdetail();
    },[]);

    let editdetail = async()=>{
        
        let result= await fetch(`http://localhost:5000/editdetails/${params.id}`);
        result = await result.json();
        setName(result.name);
        setRno(result.rollno);
        setEno(result.enrollment);
        setCourse(result.course);
        setAddress(result.address);
        setContact(result.contact);
        setDob(result.dob);
        setImage(result.image);
        setSem(result.semester);
        setGender(result.gender);

    }

    

    let convert =(e)=>{
        var reader =new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload =() =>{
            // console.log(reader.result);
            setImage(reader.result);
        } }
    
    let updatedetail = async() =>{
        
        let result= await fetch(`http://localhost:5000/updatedetails/${params.id}`,{
            method:"put", 
            corssDomain:true,
            body: JSON.stringify({name,rollno,enrollment,course,address,contact,dob,image,semester,gender}),
            headers:{
                "Content-type":"application/json",
                "Access-Control-Allow-Origin":"*",
            },
        });
        result =await result.json();
        if(result){
            alert("Successfully");
        }
        navigate("/getdetail")
        
    }
    


    return(
        <div>
            <Userheader/>
        <div className="container editdetail-main">
           <div className="editdetail-main-2">
                <div className="editdetail-base">
                    <input type="text" placeholder="Enter Full Name" 
                      onChange={(e)=>setName(e.target.value)} value={name} className="editdetail-input" ></input>
                    <input type="number" placeholder="Enter Roll No." 
                       onChange={(e)=>setRno(e.target.value)} value={rollno}  className="editdetail-input"></input>
                    <input type="text" placeholder="Enter Enrollment No." 
                     onChange={(e)=>setEno(e.target.value)} value={enrollment}  className="editdetail-input"></input>
                    <input type="text" placeholder="Enter Course"  
                       onChange={(e)=>setCourse(e.target.value)} value={course}  className="editdetail-input"></input>
                     <input type="text" placeholder="Enter Address"  
                        onChange={(e)=>setAddress(e.target.value)} value={address}  className="editdetail-input"></input>
                     <input type="number" placeholder="Enter Contact No."  
                       onChange={(e)=>setContact(e.target.value)} value={contact}  className="editdetail-input" ></input>

                    <label><b>Enter Your Date Of Birth</b></label>
                     <input type="date" 
                     onChange={(e)=>setDob(e.target.value)} value={dob}  className="editdetail-input"  ></input>

                    <label><b>Upload Your Photo</b></label>
                    <input type="file" accept=".png, .jpg"  onChange={convert}  className="editdetail-input"></input>

                    <select  onChange={(e)=>setSem(e.target.value)} value={semester}  className="editdetail-input">
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
                    <select  onChange={(e)=>setGender(e.target.value)} value={gender}  className="editdetail-input">
                        <option hidden> Select Gender</option>
                        <option value="male"> Male</option>
                        <option value="female"> Female</option>
                    </select>
                    <button  type="submit" onClick={updatedetail} className="editdetail-button"> Update </button>
                </div>
                
            </div>
           </div>


        </div>
    )

}


export default Editdetail;



