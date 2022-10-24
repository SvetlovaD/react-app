import avatar1 from '../components/main/friends/img/Screenshot_1.png';
import avatar2 from '../components/main/friends/img/Screenshot_2.png';
import avatar3 from '../components/main/friends/img/Screenshot_3.png';
import avatar4 from '../components/main/friends/img/Screenshot_4.png';
import avatar5 from '../components/main/friends/img/Screenshot_5.png';
import avatar6 from '../components/main/friends/img/Screenshot_10.png';

import img1 from '../components/main/news/img/topshot_95.jpg';
import img2 from '../components/main/news/img/Screenshot_1.png';
import img3 from '../components/main/news/img/Screenshot_2.png';
import img4 from '../components/main/news/img/Screenshot_3.png';
import img5 from '../components/main/news/img/Screenshot_4.png';
import img6 from '../components/main/news/img/Screenshot_5.png';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    
    news: [
        {id:1, name:"Thomas Hardy", date:"16.09.22 22:31", avatar:avatar1, text: "One time I realized “wait, I can just not go” and it was all downhill from there", img:img1, likes: 7},
        {id:2, name:"Benedict Cumberbatch", date:"25.09.22 14:10", avatar:avatar2, text: "When you die people are going to look through your phone whether you like it or not", img:img2, likes:3},
        {id:3, name:"Brad Pitt", date:"02.10.22 12:58", avatar:avatar3, text: "body parts that need regular moisturising are literally so fucking stupid like. my brother in christ we're 60% water", img:img3, likes:11},
        {id:4, name:"Dwayne Johnson", date:"07.10.22 15:15", avatar:avatar4, text: "You're in the squad because of your optimized combat build and heavy weapons. I'm in the squad because they're trying to romance me and want to hear my dialogue options. We are not the same.", img:img4, likes:15},
        {id:5, name:"Johnny Depp", date:"14.10.22 17:01", avatar:avatar5, text: "pov: you're in the passenger seat, hand-feeding the driver fries like a wild horse", img:img5, likes:8},
        {id:6, name:"Jensen Ackles", date:"20.10.22 19:16", avatar:avatar6, text: "I hate how recruiters are always like we need a cover letter and references and a thank you note like ummm i'm pretty sure you need an employee", img:img6, likes:23}
    ],
    newPostText: ''
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let date = new Date();
            let today = ("0" + date.getDate()).slice(1);
            let month = date.getMonth() + 1;
            let todayMonth = ("0" + month).slice(1);
            let minute = date.getMinutes();
            if(minute < 10){
                minute = "0" + minute;
            }
            let dateToday = today + "." + todayMonth + "." + String(date.getFullYear()).slice(2) + " " + date.getHours() + ":" + minute;

            let newPost = {
                id: state.news.length + 1,
                name: "Kira",
                date: dateToday,
                text: state.newPostText,
                likes: 0
            };
            /* console.log(state.posts); */
            return  {
                ...state,
                news: [...state.news, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            /* console.log(state.posts); */
            return  {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default newsReducer;