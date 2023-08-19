
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import "./Detailhome.css";


const Detailhome =()=>{
    return(
        <div>
            <Header/>

            <div className="container detailh-main">
            
            <div className="detailh-style">
               <h1 className="detailh-heading">
                Please, 
                <br></br>
                <Link  to="/login">Login</Link> to See Details  
               </h1>
               
             </div>
          </div>

         </div>


        
    )
}


export default Detailhome;