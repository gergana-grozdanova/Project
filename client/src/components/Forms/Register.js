import {useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import '../Forms/Forms.css';
import{AppContext} from '../../context';

const Register =({history})=> {
   

    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const [rePassword,setRePassword]=useState();
    const [message,setMessage]=useState();
    const {login}=useContext(AppContext)
    const handleUsernameChange = e => {
        let currValue=e.target.value;
        if (currValue.length<4) {
            setMessage('Username should be at least 4 characters!')
        }
        else{
            setMessage('')
        }
        setUsername(currValue)
       
     };

     const handlePasswordChange=e=>{
        let currValue=e.target.value;
        if (currValue!==rePassword) {
            setMessage('Password must be the same in both fields!');
        }
        else{
            setMessage('')
        }

        setPassword(currValue)
     }

     const handleRePasswordChange=e=>{
        let currValue=e.target.value;
        if (currValue!==password) {
            setMessage('Password must be the same in both fields!');
        }
        else{
            setMessage('')
        }

        setRePassword(currValue)
     }
   
   const  handleSubmit = e => {
       e.preventDefault();

       const user={username,password,rePassword}; 
       console.log(user);
       const requestOptions = {
           method: 'POST',
           headers: { 
               'Content-Type': 'application/json',
               'Accept': 'application/json'
        },
           body: JSON.stringify(user)
       };
       fetch('http://localhost:5555/auth/register', requestOptions)
           .then(response => response.json())
           .then(resp=>{
               console.log(resp)
               if (resp.error) {
                   setMessage(resp.error.message)
               }else{
                   login(resp);
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
                    <input type="text" placeholder="Enter Username" name="username" required onChange={handleUsernameChange}/>

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required onChange={handlePasswordChange} />

                    <label htmlFor="rePassword"><b>Repeat password</b></label>
                    <input type="password" placeholder="Repeat Password" name="rePassword" required onChange={handleRePasswordChange} />

                    <button type="submit">Register</button>
                    <p style={{textAlign:"center"}}>Already have a profile? <Link to="/login">Login here!</Link></p>
                    <p>{message}</p>
                </div>
            </form>
        );
    
}

export default Register;