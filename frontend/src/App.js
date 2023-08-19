
import Home from "./Home";
import { Route, Routes } from "react-router-dom"; 
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import Userhome from "./Pages/Userhome";
import Adetails from "./Pages/Adetails";
import Getdetail from "./Pages/Getdetail.js";
import Editdetail from "./Pages/Editdetail";
import Detailhome from "./Pages/Detailhome";
import PrivateRoute from "./Pages/PrivateRoute";

const App=() =>{
    return(
        <Routes>

            <Route element={<PrivateRoute/>}>

            <Route path="/userhome" element={<Userhome/>}></Route>
            <Route path="/adetail" element={<Adetails/>}></Route>
            <Route path="/getdetail" element={<Getdetail/>}></Route>
            <Route path="/editdetails/:id" element={<Editdetail/>}></Route>
          

            </Route>

            <Route path="/" element={<Home/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/signup" element={<Signup/>} ></Route>
            <Route path="/detailhome" element={<Detailhome/>}></Route>
          
            
        
        </Routes>
    )
}

export default App;