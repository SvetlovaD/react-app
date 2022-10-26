import React from "react";
import { NavLink, Route, Routes} from "react-router-dom";
import style from './messages.module.css';


const Message = (props)=> {
    return(
            <div>
                <div className={style.message}>
                    <img src={props.avatar} alt="" className={style.friendImg}/>
                 <div className={style.messageDesc}>
                 <p className={style.messageName}>{props.name}</p>   
                 <p className={style.messageText}>{props.text}</p>
                 <p className={style.time}>{props.time}</p>
                </div>   
                </div>
            </div>
    )
}



const Dialogs = (props) => {
    let newMessageBody = props.newMessageBody;
    let newMessage = React.createRef();

    let onSendMessageClick = () => { 
        props.sendMessage(props.id);
}

let onNewMessageChange = (e) => {
    let body = newMessage.current.value;
    props.updateNewMessageBody(body);
}

let Messages = props.messages.map(item => <Message id={item.id} text={item.text} time={item.dispatchTime} name={item.name} avatar={item.avatar}/>)

    return(
        <div>
        {Messages} 
        <div className={style.messageSend}>
        <textarea
        onChange={onNewMessageChange}
        placeholder='Send message'
        ref={newMessage}
        value={newMessageBody}>
    </textarea>
    <div>
    <button onClick={onSendMessageClick}>Send</button> </div> 
        </div>
        </div>
    )
}

const Friend = (props) => {
    let path = "user" + props.id;
    

    return (
        
        <NavLink  to={path} className = { navData => navData.isActive ? style.active : style.item }>
          <div className={style.names}>
            <div className={style.friendDesc}>
             <img src={props.img} alt="" className={style.friendImg} />   
            <h4>{props.name}</h4>
                </div> 
                
                <div className={style.descMessage}>
                <p className={style.desc}>{props.lastSms.text}</p>
                <p className={style.desc}>{props.lastSms.dispatchTime}</p>
                </div>
                </div>
        </NavLink>
        
    )
}


const Messages = (props) => {
    
    let newMessageBody = props.newMessageBody;

    let friends = props.users.map(friend => <Friend name={friend.name} img={friend.img} id={friend.id} lastSms={friend.messages.slice(-1)[0]} />);

    let dialogs = props.users.map(item => <Route path={"user" + item.id} element={<Dialogs messages={item.messages} id={item.id - 1} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>)


    return (
        <div className={style.messages}> 
            <h2>Messages</h2>
            <div className={style.dialogsWrapper}>
                <div className={style.people}>
                   {friends} 
                </div>
                <div className={style.dialogs}>
                    <Routes> 
                        <Route path="" element={<DefaultChatSection/>}/>
                        {dialogs}
                    </Routes>
                </div>
            </div>
        </div>
    )
}



const DefaultChatSection = () => {
    return (
        <div className="default-chat-section">
            <div className="message-item"></div>
            <p>Select a chat to start messaging</p>
        </div>
    )
}





export default Messages;