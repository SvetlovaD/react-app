import React from "react";
import style from './friends.module.css';
import avatar1 from './img/Screenshot_1.png';
import avatar2 from './img/Screenshot_2.png';
import avatar3 from './img/Screenshot_3.png';
import avatar4 from './img/Screenshot_4.png';
import avatar5 from './img/Screenshot_5.png';
import avatar6 from './img/Screenshot_10.png';
import avatar7 from './img/Screenshot_6.png';

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


    return (
        <div className={style.friends}>
            <h2>Friends</h2>
            <div className={style.usersWrapper}>
            {props.friends.map(user => <div key={user.id} className={style.User}>
                    <div className={style.description}>
                        <img src={user.avatar} alt="photo"/>
                    <div className={style.fullName}>{user.fullName}</div>
                    </div>
                    <div>{user.followed}</div>
                    <div className={style.location}>{user.location.country}</div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {props.followUser(user.id)}}>Unfollow</button>
                            : <button onClick={() => {props.unfollowUser(user.id)}}>Follow</button>
                        }

                    </div>

                </div>)
            }
        </div>
        </div>
    )
}

export default Friends;