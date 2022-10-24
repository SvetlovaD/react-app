import React from "react";
import NewsFeed from './news';
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/newsReducer';


let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        newPostText: state.newsPage.newPostText
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

const NewsContainer = connect(mapStateToProps, mapDispatchToProps) (NewsFeed)

export default NewsContainer;