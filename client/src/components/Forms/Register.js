import React, { Component } from 'react';
import '../Forms/Forms.css';


class Register extends Component {
    render() {
        return (
            <form action="action_page.php" method="post">
                <div className="imgcontainer">
                    <img src="user.png" alt="Avatar" className="avatar" />
                </div>
                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <label for="psw"><b>Repeat password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw" required />

                    <button type="submit">Login</button>
                </div>
            </form>
        );
    }
}

export default Register;