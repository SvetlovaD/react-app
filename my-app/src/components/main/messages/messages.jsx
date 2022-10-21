import React from "react";
import { NavLink, Route, Routes} from "react-router-dom";
import style from './messages.module.css';




const Messages = (props) => {
    
    let newMessage = React.createRef();
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => { 
            props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = newMessage.current.value;
        props.updateNewMessageBody(body);
    }

    let friends = props.users.map(friend => <Friend name={friend.name} id={friend.id} lastSms={friend.messages.slice(-1)[0]} />);
   /*  let friendsChat = props.users.map(friendChat => <FriendChat onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange} id={friendChat.id} friendMessages={friendChat.messages} />);

    let routeMessage = props.users.map(route => <Route path={"messages/dialogs/" + route.id} element={<Message onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange} id={route.id} friendMessages={route.messages}/>}/>) */

    let oneMessage = props.dialogs.map(item => <Message /* onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange} */ id={item.id} text={item.text} time={item.dispatchTime}/>)
    /* oneMessage.push(<InputMyMessageBlock onSendMessageClick={props.onSendMessageClick} onNewMessageChange={props.onNewMessageChange} />); */

    return (
        <div className={style.messages}>
            <h2>Messages</h2>
            <div className={style.dialogsWrapper}>
                <div className={style.people}>
                   {friends} 
                </div>
                
                <div className={style.dialogs}>
                {oneMessage}
                    {/* <RouteElement>
                        {routeMessage}
                    </RouteElement> */}
                {/* <Routes>
                    <Route path="" element={<DefaultChatSection />} />
                </Routes> */}
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
            </div>
        </div>
    )
}

const RouteElement = (props)=> {
    return(
        <Routes>
            {props.children}
        </Routes>
    )
}

const Message = (props)=> {
    return(
        <div>
            <div>
                <div className={style.message}>
                <p >{props.text}</p>
                <p className={style.time}>{props.time}</p>
                </div>
            </div>
            {/* <div className="inpute-my-message">
            <textarea
                onChange={props.onNewMessageChange}
                placeholder='Send message'>
            </textarea>
            <button onClick={props.onSendMessageClick}>
            </button> */}
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

const Friend = (props) => {
    let path = "dialogs/" + props.id;
    

    return (
        <NavLink data-dialog-id={props.id} to={path} className="active">
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

const FriendChat = (props) => {
    let path = 'dialogs/' + props.id;
    let lastID = props.friendMessages.slice(-1)[0].id;

    let friendMessages = props.friendMessages.slice(0).reverse().map(friendMessage => <FriendMessage lastID={lastID} id={friendMessage.id} text={friendMessage.text} myMessage={friendMessage.myMessage} />);

    friendMessages.push(<InputMyMessageBlock onSendMessageClick={props.onSendMessageClick} onNewMessageChange={props.onNewMessageChange} />);

    return (
        <Routes>
            <Route path={path} element={friendMessages}/>
        </Routes>
        
    )
    console.log(friendMessages);
}

const FriendMessage = (props) => {
    if (props.myMessage) {
        return (<p className="my-message-text">{props.text}</p>)
    } else
    return (<p className="message-text">{props.text}</p>)
}

const InputMyMessageBlock = (props) => {
    let newPostElement = React.createRef(); 
    return (
        <div className="inpute-my-message">
            <textarea
                onChange={props.onNewMessageChange}
                placeholder='Send message'
                ref={newPostElement}>
            </textarea>
            <button onClick={props.onSendMessageClick}>
            </button>
        </div>
    )
}

export default Messages;