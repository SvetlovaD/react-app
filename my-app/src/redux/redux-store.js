import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from './dialogsReducer';
import friendsReducer from './friendsReducer';
import newsReducer from './newsReducer';
import authUserReducer from './authReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friendsPage: friendsReducer,
    newsPage: newsReducer,
    auth: authUserReducer
}
);

let store = createStore(reducers);

export default store;