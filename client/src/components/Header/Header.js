import '../Header/Header.css';
import {NavLink} from 'react-router-dom';
import {AppContext} from '../../context'
import {useContext} from 'react';

const Header= ()=>{

const {isAuth}=useContext(AppContext)
   console.log(isAuth)
        return(

            <nav id="navigation">
            <div className="container">
               
                <div>
                    <ul className="nav"> 
                        {isAuth?
                        <>
                        <li><NavLink  to="/logout">Logout</NavLink></li>
                        <li><NavLink to ="/myProfile">My Profile</NavLink></li>
                        </>
                        :
                        <>
                        <li><NavLink to="/login">Login</NavLink></li> 
                        <li><NavLink  to="/register">Register</NavLink></li>
                        </>}
                        <li><NavLink  to="/post/add">Create Post</NavLink></li>
                        <li className="title"><NavLink to="/">Travel Blog</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    

}

export default Header;