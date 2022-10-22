const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    
    posts: [
        {id:1, name:"Kira", date:"16.09.22 22:31", text: "One time I realized “wait, I can just not go” and it was all downhill from there", likes:"7"},
        {id:2, name:"Kira", date:"25.09.22 14:10", text: "When you die people are going to look through your phone whether you like it or not", likes:"3"},
        {id:3, name:"Kira", date:"02.10.22 12:58", text: "body parts that need regular moisturising are literally so fucking stupid like. my brother in christ we're 60% water", likes:"11"},
        {id:4, name:"Kira", date:"07.10.22 15:15", text: "You're in the squad because of your optimized combat build and heavy weapons. I'm in the squad because they're trying to romance me and want to hear my dialogue options. We are not the same.", likes:"15"},
        {id:5, name:"Kira", date:"14.10.22 17:01", text: "pov: you're in the passenger seat, hand-feeding the driver fries like a wild horse", likes:"8"},
        {id:6, name:"Kira", date:"20.10.22 19:16", text: "I hate how recruiters are always like we need a cover letter and references and a thank you note like ummm i'm pretty sure you need an employee", likes:"23"}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
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
                id: state.posts.length + 1,
                name: "Kira",
                date: dateToday,
                text: state.newPostText,
                likes: 0
            };
            /* console.log(state.posts); */
            return  {
                ...state,
                posts: [...state.posts, newPost],
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

export default profileReducer;