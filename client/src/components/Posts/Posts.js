import React,{Component} from 'react';
import Post from '../Posts/Post/Post';



class Posts extends Component{

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
  let fetchedposts;
  if (this.state.posts) {
      fetchedposts = this.state.posts.map(post => (
        
        <Post key={post._id} {...post} {...this.getDate(post)}></Post>
      ))
  }

          return(
           <div className="posts">
             {fetchedposts}
           </div>
          )
      }
}

export default Posts;