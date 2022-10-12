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
   let getPosts = props.posts.map(post => <Posts text={post.text} likes={post.likes}/>)
    return (
      <div className={style.profile}>
        <h2>Profile</h2>
        <div className={style.publish}>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <div>
          <button>Post</button>
          </div>
        </div>
        <div>
          {getPosts}
        </div>
      </div>
    )
  }


export default Profile;   