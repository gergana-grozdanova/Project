import React,{Component} from 'react';
import Post from '../Posts/Post/Post';
import {AppContext} from '../../context'
import { Link } from 'react-router-dom';
import '../Posts/Posts.css'


class Posts extends Component{
  static contextType=AppContext;
  constructor(){
    super()
    this.state={
        posts:[]
    }
}

  getAll(){
  return fetch("http://localhost:5555/post",{
      method: "GET"
          })
      .then(response=>{
      return response.json();
  })
      .catch(err=>console.log(err))
};

 loadPosts  () {
    this.getAll().then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            this.setState({ posts: data });
            console.log(this.state.posts)
        }
    });
};

componentDidMount() {
   this.loadPosts();
}

getDate(post){
  const months={
    1:"Jan",
    2:"Feb",
    3:"March",
    4:"Apr",
    5:"May",
    6:"June",
    7:"July",
    8:"Aug",
    9:"Sep",
    10:"Oct",
    11:"Nov",
    12:"Dec"
  }
  let date=new Date(post.dateCreated);
  return {
    day:date.getDate(),
    month:months[date.getMonth()+1],
    year:date.getFullYear()
  }
}

render(){
  const{isAuth}=this.context;
  let fetchedposts;
  if (this.state.posts) {
      fetchedposts = this.state.posts.map(post => (
        
        <Post key={post._id} {...post} {...this.getDate(post)}></Post>
      ))
  }

          return(
           <div>
             {isAuth?
             <div className="posts">{fetchedposts}</div>
             :
             <div className="guest">
               <h1>You are logged out!</h1>
               <h3><Link to="/login">Login</Link> to see all blogs</h3>
               </div>}
           </div>
          )
      }
}

export default Posts;