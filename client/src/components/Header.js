import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <nav id="navigation">
            <div class="container">
                <a href="/home">Travel Blog</a>
                <div>
                    <ul >
                        <li><a  href="">Login</a></li>
                        <li><a  href="">Logout</a></li>
                        <li><a  href="">Register</a></li>
                        <li><a  href="">Create Post</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }

}

export default Header;