import React,{Component} from 'react';
import Post from '../Post/Post';

class Posts extends Component{
      render(){
          return(
              <>
              <h1>Posts</h1>
              <Post/>
              <Post/>
              </>
          )
      }
}