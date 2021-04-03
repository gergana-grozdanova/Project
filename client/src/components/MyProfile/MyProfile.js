import { Component } from "react";
import { Link } from "react-router-dom";
import styles from '../MyProfile/MyProfile.module.css';
import {getAll,getDate} from '../../services/posts'
import {AppContext} from '../../context'



class MyProfile extends Component{
static contextType=AppContext;
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }
    
   
     loadPosts () {
         const {username} =this.context;
         console.log(username)
        getAll(username).then(data => {
            console.log(data)
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ posts: data });
                console.log(this.state.posts)
            }
        })
        .catch(error=>console.log(error))
    };
    
    componentDidMount() {
       this.loadPosts();
    }

      deleteHandler(e){
       const id= e.target.parentElement.id;
        fetch(  `http://localhost:5555/post/delete/${id}`, { method: 'DELETE' })
        .then(() => {
          this.loadPosts()
        })
        .catch(err=>console.log(err));
      }

    render(){
        let fetchedposts;
      if (this.state.posts.length>0) {
      fetchedposts = this.state.posts.map(post => (
        
        <div className={styles.container} id={post._id} key={post._id}>
                   <h2 >{post.destination}</h2>
                   <h4>{getDate(post)}</h4>
                   <button type="button" onClick={this.deleteHandler.bind(this)}>Delete</button>
               </div>
      ))
      }else{
         fetchedposts= <div>No posts yet, but you can <Link to="post/add">create one...</Link></div>
        }

        return(
            <div>
                {fetchedposts}
            </div>
        )
    }
}

export default MyProfile;