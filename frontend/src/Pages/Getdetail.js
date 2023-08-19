

import Userheader from "../Common/Userheader";
import { useState } from "react";
import { useEffect } from "react";
import "./Getdetail.css"
import { Link } from "react-router-dom";


const  Getdetail =()=>{

    let [detail,setDetail] = useState([]);
    let user = JSON.parse(localStorage.getItem("user"));
    let email =user.email;
  

    let detaildata = async (id) =>{
        let data= await fetch (`http://localhost:5000/getdetails/${email}`);
        data =await data.json();
        setDetail(data);
    }
    useEffect(()=>{
        detaildata();
    });

    let deletedetail = async(id)=>{
        let result = await fetch(`http://localhost:5000/deletedetail/${id}`,
        {
            method:"delete"
        });
        result = result.json();
        if(result){
            detaildata();
        }
    }

    // const searchdetail = async (e) =>{
    //     let key = e.target.value;
    //     if (key){
    //         let result = await fetch (`http://localhost:5000/searchdetail/${key}`);
    //         result = await result.json();
    //         if (result){
    //             setDetail(result);
    //         }
    //     }
    //     else{
    //         detaildata();
    //     }
    // }
    
   

    return(
        <div>
            <Userheader/>
            <div className="container getd-main ">

            {/* <div>
            <input type="search" onChange={searchdetail} placeholder="Search by ......"></input>
        </div> */}


            <div className="getd-body">
                {
                    detail.map((item,index)=> 
                    <div className="getd-base">
                         <div className="getd-img"> 
                         <div>  <img src={item.image} height={200} width={250} alt="detail"></img> </div> 
                         <br></br>

                         </div>
                      
                      <div>
                      <table className="getd-table" align="center"> 
                            <tr>
                                <td>Name</td>
                                <td>:</td>
                                <td><div className="getd-part">{item.name} </div></td>
                            </tr>
                            <tr>
                                <td >Roll No.</td>
                                <td>:</td>
                                <td> <div> {item.rollno}</div></td>
                            </tr>
                            <tr>
                                <td >Enroll No.</td>
                                <td>:</td>
                                <td> <div> {item.enrollment}</div></td>
                            </tr>
                            <tr>
                                <td >Course</td>
                                <td>:</td>
                                <td> <div> {item.course}</div></td>
                            </tr>
                            <tr>
                                <td >Address</td>
                                <td>:</td>
                                <td> <div> {item.address}</div></td>
                            </tr>
                            <tr>
                                <td>Contact</td>
                                <td>:</td>
                                <td> <div> {item.contact}</div></td>
                            </tr>
                            <tr>
                                <td>DOB</td>
                                <td>:</td>
                                <td> <div> {item.dob}</div></td>
                            </tr>
                            <tr>
                                <td>Semester</td>
                                <td>:</td>
                                <td> <div> {item.semester}</div></td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>:</td>
                                <td> <div> {item.gender}</div></td>
                            </tr>
                            {/* <tr>
                                <td>Email</td>
                                <td>:</td>
                                <td> <div> {item.email}</div></td>
                            </tr> */}


                        </table> 
                        <div className="getd-button">
                            <button className="getd-button-1"> <Link to={"/editdetails/"+item._id} > Edit</Link> </button>
                            <button type="submit" onClick={()=> deletedetail(item._id)} className="getd-button-2">Delete</button>
                            </div>

                        </div>

                        
                    </div>
                         
                    
                    
                    )
                }

            </div>





            </div>

            


        </div>
    )
}

export default Getdetail;