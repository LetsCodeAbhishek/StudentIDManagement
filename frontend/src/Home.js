import Header from "./Common/Header"
import "./Home.css"
import { Link } from "react-router-dom"
const Home = () =>{
    return(
        <div>
            <Header/>
            <div className='container home-main'>
       
       <div className="row home-base">

       <div className="col-6 home-heading">
       Find Your Student's <span className="color-change">Deatils</span> in One Place

       </div>
       <div className="col-6 home-button">
         <button className="home-button-1"><Link to="./login">Login</Link></button>
         <button className="home-button-2"><Link to="./signup">SignUp</Link></button>
       </div>

       </div>
       
       </div>
        </div>
    )
}

export default Home;