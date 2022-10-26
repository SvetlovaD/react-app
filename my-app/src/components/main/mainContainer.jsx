/* import React from "react";
import Main from "./main";
import {connect} from "react-redux";
import {setAuthUserData} from '../../redux/authReducer';



let mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => { 
    return {
        setAuthUserData: (userId, email, login) => {
            dispatch(setAuthUserData(userId, email, login));
        }

    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps) (Main);

export default MainContainer; */