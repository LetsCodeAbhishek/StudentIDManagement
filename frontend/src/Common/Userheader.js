
import './Userheader.css'
import { Link } from 'react-router-dom';

const Userheader = () =>{

    let logout = () =>{
        localStorage.clear();
    }

    return(
            <div className='container'>
                <div className="row uheader-main">
                <table>
                    
                    <tr>
                        <td className='uh-logo' >React Project</td>
                        <td className='Ulogin-td'> <Link to="/userhome"> Home </Link></td>
            
                        <td className='Ulogin-td '> <Link to="/adetail"> Add detail</Link></td>
                        <td className='Ulogin-td'> <Link to="/getdetail"> Details</Link></td>
                        <td className='Ulogin-td' > <Link onClick={logout} to="/login"> Log Out</Link></td>
                    </tr>
                                                            

                </table>
            </div>
            </div>
    );
}

export default Userheader;