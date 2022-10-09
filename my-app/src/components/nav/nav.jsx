import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css'; 

const Nav = () => {
    return (
        <div className={style.nav}>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/messages">Messages</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/videos">Videos</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </div>
    )
}

export default Nav;