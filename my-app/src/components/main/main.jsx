import React from "react";
import style from './main.module.css';

const Main = (props) => {
    return (
      <div className={style.main}>
        {props.children}
      </div>
    )
  }

export default Main;  