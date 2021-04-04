import '../Forms/Forms.css';
import {  useState ,useContext} from 'react';
import{AppContext} from '../../context';
import { Link } from 'react-router-dom';

const Post=({history})=>{

    const {username,isAuth}=useContext(AppContext)
   const [message,setMessage]=useState();

   const  handleSubmit = e => {
      e.preventDefault();
  
     const post={
                 description:e.target.description.value,
                  destination:e.target.destination.value,
                  selectedFile:e.target.selectedFile.value,
                  creator:username
                }
      console.log(post)
  
      const requestOptions = {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
       },
          body: JSON.stringify(post)
      };
      fetch('http://localhost:5555/post/add', requestOptions)
          .then(response => response.json())
          .then(resp=>{
              if (resp.error) {
                  setMessage(resp.error.message)
              }else{
                setMessage("New post created!")
                history.push('/');
              }
          })
         .catch(err=>setMessage(err.message))
      
      }


    return(
        
        <>
        {isAuth?
        <section >
        <h2 className="create-post-t">Create new post</h2>
        <form onSubmit={handleSubmit}>
            <div className="container">
                <label htmlFor="dest"><b>Destination</b></label>
                <input type="text" placeholder="Enter Destination" name="destination" />

                <label htmlFor="descr"><b>Description</b></label>
                <input type="text" placeholder="Enter Description" name="description" />

                <label htmlFor="selectedFile"><b>Photo from the adventure </b></label>
                <input type="text" id="selectedFile" name="selectedFile" />

                <button type="submit">POST</button>
                <p>{message}</p>
            </div>
        </form>
    </section>
    :<p style={{textAlign:"center"}}>You aren't logged in! <Link to="/login">Login here...</Link></p>
    }
        </>
    )
}



export default Post;