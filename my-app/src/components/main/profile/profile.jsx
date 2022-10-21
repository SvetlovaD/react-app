import React from "react";
import style from './profile.module.css';
import girl from '../nav/img/girl.png';
import like from './img/like.png';




const Posts = (props) => {
  return (
    <div className={style.posts}>
      <img src={girl} alt="" />
      <div className={style.text}>{props.text}</div>
      <div className={style.likes}>
        <img src={like} alt="" />
        <p>{props.likes}</p>
      </div>
    </div>
  )
}


const Profile = (props) => {
   let getPosts = props.posts.slice().reverse().map(post => <Posts text={post.text} likes={post.likes}/>)
   let newPostElement = React.createRef(); 
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
          <textarea onChange={onPostChange} ref={newPostElement}></textarea>
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