import React from "react";
import { NavLink, Route, Routes} from "react-router-dom";
import style from './messages.module.css';


const Message = (props)=> {
    return(
            <div>
                <div className={style.message}>
                <p >{props.text}</p>
                <p className={style.time}>{props.time}</p>
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

let Messages = props.messages.map(item => <Message id={item.id} text={item.text} time={item.dispatchTime}/>)

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
        <NavLink  to={path}>
            <div className={style.names}>
                <h4>{props.name}</h4>
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

    let friends = props.users.map(friend => <Friend name={friend.name} id={friend.id} lastSms={friend.messages.slice(-1)[0]} />);


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
                        <Route exact path="user1" element={<Dialogs messages={props.users[0].messages} id = {0} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                        <Route exact path="user2" element={<Dialogs messages={props.users[1].messages} id = {1} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                        <Route exact path="user3" element={<Dialogs messages={props.users[2].messages} id = {2} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                        <Route exact path="user4" element={<Dialogs messages={props.users[3].messages} id = {3} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                        <Route exact path="user5" element={<Dialogs messages={props.users[4].messages} id = {4} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                        <Route exact path="user6" element={<Dialogs messages={props.users[5].messages} id = {5} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                        <Route exact path="user7" element={<Dialogs messages={props.users[6].messages} id = {6} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                        <Route exact path="user8" element={<Dialogs messages={props.users[7].messages} id = {7} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
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