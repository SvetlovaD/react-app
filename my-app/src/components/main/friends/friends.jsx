import React from "react";
import style from './friends.module.css';
import avatar1 from './img/Screenshot_1.png';
import avatar2 from './img/Screenshot_2.png';
import avatar3 from './img/Screenshot_3.png';
import avatar4 from './img/Screenshot_4.png';
import avatar5 from './img/Screenshot_5.png';
import avatar6 from './img/Screenshot_10.png';
import avatar7 from './img/Screenshot_6.png';
import { NavLink, Route, Routes} from "react-router-dom";

const Friends = (props) => {

    if (props.friends.length == 0) {
        props.setUsers([
            {
                id: 1,
                avatar: avatar1,
                followed: true,
                fullName: 'Thomas Hardy',
                status: 'working',
                friends: 130,
                photos: 13,
                videos: 22,
                location: {country: 'Kyiv, Ukraine'}
            },
            {
                id: 2,
                avatar: avatar2,
                followed: true,
                fullName: 'Benedict Cumberbatch',
                status: 'working',
                friends: 289,
                photos: 31,
                videos: 15,
                location: {country: 'California, USA'}
            },
            {
                id: 3,
                avatar: avatar3,
                followed: true,
                fullName: 'Brad Pitt',
                status: 'working',
                friends: 91,
                photos: 43,
                videos: 11,
                location: {country: 'New York, USA'}
            },
            {
                id: 4,
                avatar: avatar4,
                followed: false,
                fullName: 'Dwayne Johnson',
                status: 'working',
                friends: 540,
                photos: 39,
                videos: 20,
                location: {country: 'Rome, Italy'}
            },
            {
                id: 5,
                avatar: avatar5,
                followed: true,
                fullName: 'Johnny Depp ',
                status: 'working',
                friends: 311,
                photos: 50,
                videos: 21,
                location: {country: 'Miami, USA'}
            },
            {
                id: 6,
                avatar: avatar6,
                followed: false,
                fullName: 'Jensen Ackles',
                status: 'working',
                friends: 301,
                photos: 29,
                videos: 7,
                location: {country: 'London, UK'}
            },
            {
                id: 7,
                avatar: avatar7,
                followed: false,
                fullName: 'Timothee Chalamet',
                status: 'working',
                friends: 115,
                photos: 67,
                videos: 34,
                location: {country: 'Chicago, USA'}
            }
        ]);
    }
    
    let friendFollow = props.friends.filter(function (user){ return user.followed == true});

    let followed = friendFollow.map(user => <Friend id={user.id} status={user.status} friends={user.friends} photos={user.photos} videos={user.videos} avatar={user.avatar} followed={user.followed} fullName={user.fullName} location={user.location.country} followUser={props.followUser} unfollowUser={props.unfollowUser}/>);

    let allUsers = props.friends.map(user => <Friend id={user.id} status={user.status} friends={user.friends} photos={user.photos} videos={user.videos} avatar={user.avatar} followed={user.followed} fullName={user.fullName} location={user.location.country} followUser={props.followUser} unfollowUser={props.unfollowUser}/>);


    return (
        <div className={style.friends}>
            <div>
              <NavLink to="followed" className = { navData => navData.isActive ? style.active : style.item }>Friends</NavLink> 
               <NavLink to="allusers" className = { navData => navData.isActive ? style.active : style.item }>All users</NavLink>
            </div>
            <div className={style.usersWrapper}>
            <Routes>
                <Route path="" element={followed}/>
                <Route path="followed" element={followed}/>
                <Route path="allusers" element={allUsers}/>
            </Routes>
        </div>
        </div>
    )
}

const Friend = (props) => {

    let followUser = () => {
        props.followUser(props.id)
    }
    let unfollowUser = () => {
        props.unfollowUser(props.id) 
    }

    let path = "/react-app/messages/" + "user" + props.id;

    return (
        <div key={props.id} className={style.User}>
                    <div className={style.description}>
                        <img src={props.avatar} alt="photo"/>
                        <div className={style.userName}>
                        <div className={style.fullName}>{props.fullName}</div>
                    <div className={style.location}>{props.location}</div>
                        </div>
                    
                    </div>
                    <div>{props.followed}</div>
                    <div className={style.userDescWrapper}>
                      <div className={style.userDesc}><b>Friends:</b> {props.friends}</div>
                      <div className={style.userDesc}><b>Photos:</b> {props.photos}</div>
                      <div className={style.userDesc}><b>Videos:</b> {props.videos}</div>
                      <div className={style.userDesc}><b>Status:</b> {props.status}</div>
                    </div>
                    <div className={style.btns}>
                      <NavLink to={path} className={style.btnMsg}>Message</NavLink>  
                    <div className={style.btnFollow}>
                        {props.followed
                            ? <button onClick={followUser} className={style.activeBtn}>Unfollow</button>
                            : <button onClick={unfollowUser} >Follow</button>
                        }

                    </div>
                    </div>
                    
                </div>
    )
}

export default Friends;