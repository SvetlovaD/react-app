import React from "react";
import Friends from './friends';
import {connect} from "react-redux";
import {followCreator, setUsersCreator, unfollowCreator} from '../../../redux/friendsReducer';

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followCreator(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        }

    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps) (Friends);

export default FriendsContainer;