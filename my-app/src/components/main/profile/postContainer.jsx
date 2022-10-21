import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Profile)

export default PostsContainer;