import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css';
import profile from './img/user.png';
import messages from './img/envelope.png';
import friends from './img/users-alt.png';
import news from './img/layout-fluid.png';
import videos from './img/play-alt.png';
import girl from '../img/girl.png';

const Avatar = () => {
    return (
        <div className={style.avaWrapper}>
            <div className={style.imgWrapper}><img src={girl} alt="" className={style.avaImg}/></div>
            <h2>Kira Lambert</h2>
        </div>
    )
}

const Nav = () => {
    return (
        <div className={style.nav}>
            <Avatar/>
            <div className={style.itemsWrapper}>
            <div className= {style.navItems}>
                <img src={profile} alt="" className={style.navIcons}/>
            <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className= {style.navItems}>
                <img src={messages} alt="" className={style.navIcons}/>
            <NavLink to="/messages">Messages</NavLink>
            </div>
            <div className= {style.navItems}>
                <img src={friends} alt="" className={style.navIcons}/>
            <NavLink to="/friends">Friends</NavLink>
            </div>
            <div className= {style.navItems}>
                <img src={news} alt="" className={style.navIcons}/>
            <NavLink to="/videos">News Feed</NavLink>
            </div>
            <div className= {style.navItems}>
                <img src={videos} alt="" className={style.navIcons}/>
            <NavLink to="/settings">Videos</NavLink>
            </div>
            </div>
        </div>
    )
}

export default Nav;