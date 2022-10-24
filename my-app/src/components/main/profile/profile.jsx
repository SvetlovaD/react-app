import React from "react";
import style from './profile.module.css';
import girl from '../nav/img/girl.png';
import like from './img/like.png';


class Counter extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          count: props.likes
        }
  }

  clickForward = (e) => {
      this.setState({count: this.state.count + 1})
  };


  render (){
      return (
          <div className={style.likes}>
          <img src={like} alt="" onClick={this.clickForward}/>
          <p>{this.state.count}</p>
        </div>
      )
  }
}


const Posts = (props) => {
  return (
    <div className={style.posts}>
      <img src={girl} alt="" />
      <div className={style.text}>
        <div className={style.textDesc}>
          <p className={style.name}>{props.name}</p>
          <p className={style.date}>{props.date}</p>
        </div>
        <div>
        {props.text}
        </div>
        </div>
        <Counter likes={props.likes}/>
    </div> 
  )
}


const Profile = (props) => {
   let getPosts = props.posts.slice().reverse().map(post => <Posts text={post.text} likes={post.likes} date={post.date} name={post.name}/>)
   let newPostElement = React.createRef(); 
   let newPostText = props.newPostText;
   let onAddPost = () => {
    props.addPost();
}
let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
}
    return (
      <div className={style.profile}>
        <h2>Profile</h2>
        <div className={style.publish}>
          <textarea onChange={onPostChange} ref={newPostElement} value={newPostText} placeholder="Type new post..."></textarea>
          <div>
          <button onClick={onAddPost}>Post</button>
          </div>
        </div>
        <div>
          {getPosts}
        </div>
      </div>
    )
  }


export default Profile;   