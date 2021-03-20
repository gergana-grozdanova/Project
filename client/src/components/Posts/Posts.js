import React,{Component} from 'react';
import Post from '../Posts/Post/Post';
import '../Posts/Posts.css'

class Posts extends Component{
      render(){
          return(
            <div className="posts">
            <Post/>
            <Post/>
        </div>
          )
      }
}

export default Posts;