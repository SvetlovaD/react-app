const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id:1, text: "One time I realized “wait, I can just not go” and it was all downhill from there", likes:"7"},
        {id:2, text: "When you die people are going to look through your phone whether you like it or not", likes:"3"},
        {id:3, text: "body parts that need regular moisturising are literally so fucking stupid like. my brother in christ we're 60% water", likes:"11"},
        {id:4, text: "You're in the squad because of your optimized combat build and heavy weapons. I'm in the squad because they're trying to romance me and want to hear my dialogue options. We are not the same.", likes:"15"},
        {id:5, text: "pov: you're in the passenger seat, hand-feeding the driver fries like a wild horse", likes:"8"},
        {id:6, text: "I hate how recruiters are always like we need a cover letter and references and a thank you note like ummm i'm pretty sure you need an employee", likes:"23"}
    ],
    newPostText: 'new post text'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
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