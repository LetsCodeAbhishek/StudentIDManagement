
import Userheader from "../Common/Userheader";
import { Link } from "react-router-dom";
import "../Home.css"
const Userhome=()=>{
    return(
        <div>
            <Userheader/>
            <div className='container home-main'>
       
       <div className="row home-base">

       <div className="col-6 home-heading">
       Student's <span className="color-change">Deatils</span> in One Place

       </div>
       <div className="col-6 home-button">
         <button className="home-button-1"><Link to="/getdetail">Details</Link></button>
         <button className="home-button-2"><Link to="/adetail">Add Details</Link></button>
       </div>

       </div>
       
       </div>



        </div>
    )
};

export default Userhome;
