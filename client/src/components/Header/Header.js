import React, {Component} from 'react';
import '../Header/Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <nav id="navigation">
            <div class="container">
               
                <div>
                    <ul className="nav"> 
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink  to="">Logout</NavLink></li>
                        <li><NavLink  to="/register">Register</NavLink></li>
                        <li><NavLink  to="/post/add">Create Post</NavLink></li>
                        <li className="title"><NavLink to="/">Travel Blog</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }

}

export default Header;