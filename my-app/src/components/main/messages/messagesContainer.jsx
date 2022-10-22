import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogsReducer';
import Messages from './messages';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.dialogPage.users,
        dialogs: state.dialogPage.dialogs,
        newMessageBody: state.dialogPage.newMessageBody 
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: (text) => {
            dispatch(sendMessageCreator(text));
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default ChatContainer;