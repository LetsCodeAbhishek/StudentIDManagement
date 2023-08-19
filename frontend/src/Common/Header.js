
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () =>{

    return(
            <div className='container'>
                <div className="row header-main">
                <table>
                    
                    <tr>
                        
                        <td className='h-logo' >React Project</td>
                        <td className='login-td'> <Link to="/"> Home </Link></td>
                       
                        <td className='login-td '> <Link to="/signup"> SignUp</Link></td>
                        <td className='login-td'> <Link to="/detailhome"> Details</Link></td>
                        <td className='login-td' > <Link to="/login"> Student Login</Link></td>
                        

                    </tr>
                                                            

                </table>
            </div>
            </div>
    );
}

export default Header;