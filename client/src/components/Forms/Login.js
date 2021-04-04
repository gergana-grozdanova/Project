import '../Forms/Forms.css';
import {  useState,useContext } from 'react';
import{AppContext} from '../../context';
import { Link } from 'react-router-dom';

const Login =({history})=> {
   
    const [message,setMessage]=useState();
    const {login}=useContext(AppContext)
    const  handleSubmit = e => {
        e.preventDefault();
 
        const user={"username":e.target.username.value,"password":e.target.password.value}; 
        console.log(user);
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
         },
            body: JSON.stringify(user)
        };
        fetch('http://localhost:5555/auth/login', requestOptions)
            .then(response => response.json())
            .then(resp=>{
                console.log(resp)
                if (resp.error) {
                    setMessage(resp.error.message)
                }else{

                    //setToken(resp.username);
                    login(resp.username)
                    history.push('/');
                }
            })
           .catch(err=>setMessage(err.message))
        
        }



        return (
            <form onSubmit={handleSubmit}>
                <div className="imgcontainer">
                    <img src="user.png" alt="Avatar" className="avatar" />
                </div>
                <div className="container">
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required />

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required />

                    <button type="submit">Login</button>
                    <p style={{textAlign:"center"}}>Don't have a profile? <Link to="/register">Register now!</Link></p>
                    <p>{message}</p>
                </div>
            </form>
        );
    
}

export default Login;