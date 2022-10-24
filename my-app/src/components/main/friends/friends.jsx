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
                location: {country: 'Kyiv, Ukraine'}
            },
            {
                id: 2,
                avatar: avatar2,
                followed: true,
                fullName: 'Benedict Cumberbatch',
                status: 'working',
                location: {country: 'Kyiv, Ukraine'}
            },
            {
                id: 3,
                avatar: avatar3,
                followed: true,
                fullName: 'Brad Pitt',
                status: 'working',
                location: {country: 'Kyiv, Ukraine'}
            },
            {
                id: 4,
                avatar: avatar4,
                followed: false,
                fullName: 'Dwayne Johnson',
                status: 'working',
                location: {country: 'Kyiv, Ukraine'}
            },
            {
                id: 5,
                avatar: avatar5,
                followed: true,
                fullName: 'Johnny Depp ',
                status: 'working',
                location: {country: 'Kyiv, Ukraine'}
            },
            {
                id: 6,
                avatar: avatar6,
                followed: false,
                fullName: 'Jensen Ackles',
                status: 'working',
                location: {country: 'Kyiv, Ukraine'}
            },
            {
                id: 7,
                avatar: avatar7,
                followed: false,
                fullName: 'Timothee Chalamet',
                status: 'working',
                location: {country: 'Kyiv, Ukraine'}
            }
        ]);
    }
    
    let friendFollow = props.friends.filter(function (user){ return user.followed == true});

    let followed = friendFollow.map(user => <Friend id={user.id} avatar={user.avatar} followed={user.followed} fullName={user.fullName} location={user.location.country} followUser={user.followUser} unfollowUser={user.unfollowUser}/>);

    let allUsers = props.friends.map(user => <Friend id={user.id} avatar={user.avatar} followed={user.followed} fullName={user.fullName} location={user.location.country} followUser={user.followUser} unfollowUser={user.unfollowUser}/>);


    return (
        <div className={style.friends}>
            <div>
              <NavLink to="/react-app/friends/followed"><button className={style.btnFriends}>Friends</button></NavLink>
               <NavLink to="/react-app/friends/allusers"><button className={style.btnFriends}>All users</button></NavLink>
            </div>
            <div className={style.usersWrapper}>
            <Routes>
                <Route path="" element={followed}/>
                <Route path="/react-app/friends/followed" element={followed}/>
                <Route path="/react-app/friends/allusers" element={allUsers}/>
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

    return (
        <div key={props.id} className={style.User}>
                    <div className={style.description}>
                        <img src={props.avatar} alt="photo"/>
                    <div className={style.fullName}>{props.fullName}</div>
                    </div>
                    <div>{props.followed}</div>
                    <div className={style.location}>{props.location}</div>
                    <div>
                        {props.followed
                            ? <button onClick={followUser}>Unfollow</button>
                            : <button onClick={unfollowUser}>Follow</button>
                        }

                    </div>
                </div>
    )
}

export default Friends;