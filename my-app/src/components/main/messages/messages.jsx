import React from "react";
import { NavLink, Route } from "react-router-dom";
import style from './messages.module.css';

const Users = (props) => {
    return(
        <NavLink to={`/${props.id}`}>
        <div className={style.names}>
            <p>{props.name}</p>
            <p className={style.desc}>{props.message}</p>
        </div>
        </NavLink>
    )
}

const Dialog = (props) => {
    return (
        <div>
            <p>{props.message1}</p>
            <p>{props.message2}</p>
        </div>
    )
}

const Messages = (props) => {
    let getNames = props.names.map(user => <Users id={user.id} name={user.name} message={user.message}/>)
    return (
        <div className={style.messages}>
            <h2>Messages</h2>
            <div className={style.dialogsWrapper}>
                <div className={style.people}>
                   {getNames} 
                </div>
                
                <div className={style.dialogs}>
                    <p>Select a chat to start messaging</p>
                </div>
                
            </div>
        </div>
    )
}

export default Messages;