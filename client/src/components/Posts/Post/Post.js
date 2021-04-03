import { Component } from "react";
import '../Post/Post.scss'

class Post extends Component{

    constructor(props){
       super(props);
    }
    render(){
        return(
            <>
            <div className="row">
  <div className="example-1 card">
    <div className="wrapper" style={ {backgroundImage: `url(${this.props.selectedFile})`}}>
      <div className="date">
        <span className="day">{this.props.day}</span>
        <span className="month">{this.props.month}</span>
        <span className="year">{this.props.year}</span>
      </div>
      <div className="data">
        <div className="content">
          <span className="author">By {this.props.creator}</span>
          <h1 className="title">{this.props.destination}</h1>
          <p className="text">{this.props.description}</p>
          
        </div>
        
      </div>
    </div>
  </div>
 
</div>
             </>
  
        )
    }
}

export default Post;