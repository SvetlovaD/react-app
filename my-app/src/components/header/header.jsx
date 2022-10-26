import React from 'react';
import style from './header.module.css';
import logo from './img/bubble-chat.png';
import home from './img/home.png';
import user from './img/user.png';
import settings from './img/settings-sliders.png';
import bell from './img/bell.png';
import { NavLink } from 'react-router-dom';


const Logotype = () => {
  return (
    <div className={style.logo}>
      <img src={logo} className={style.img}/>
      <h1>Buddy</h1>
    </div>
  )
}

const Buttons = () => {


  return (
    <div className={style.buttons}>
      <input type="text" name='search' placeholder='Search...' className={style.search}/>
      <div className={style.buttonsWrapper}>
     <NavLink to='/react-app/profile' className={style.headerBtns}><div className={style.iconsWrapper}><img src={home} className={style.icons}/></div></NavLink>
     <NavLink to='/react-app/friends' className={style.headerBtns}><div className={style.iconsWrapper}><img src={user} className={style.icons}/></div></NavLink>
      <div className={style.iconsWrapper}><img src={bell} className={style.icons}/></div>
      <div className={style.iconsWrapper}><img src={settings} className={style.icons}/></div>
  
      <button className={style.loginButton}>Log in</button>
      </div>
    </div>
  )
}


const Header = () => {
    return (
      <div className={style.header}>
        <Logotype/>
        <Buttons/>
      </div>
      
    )
  }

export default Header;