import avatar1 from '../components/main/friends/img/Screenshot_1.png';
import avatar2 from '../components/main/friends/img/Screenshot_2.png';
import avatar3 from '../components/main/friends/img/Screenshot_3.png';
import avatar4 from '../components/main/friends/img/Screenshot_4.png';
import avatar5 from '../components/main/friends/img/Screenshot_5.png';
import avatar6 from '../components/main/friends/img/Screenshot_10.png';
import avatar7 from '../components/main/friends/img/Screenshot_6.png';
import girl from '../components/main/nav/img/girl.png';

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    users: [
        {id:1, name: "Thomas Hardy", img:avatar1, messages: [
            { id: 0, name: "Thomas", dispatchTime: '16:34', avatar:avatar1, text: 'Hello! How are you?' },
            { id: 1, name: "Thomas", dispatchTime: '17:59', avatar:avatar1, text: 'The online text generator allows you to specify the number of words that will form the number of paragraphs you specify.' },
            { id: 2, name:"Kira", dispatchTime: '18:03', avatar:girl, text: "However, the generated text will not make sense, but that's not what we need!" },
            { id: 3, name: "Thomas", dispatchTime: '18:40', avatar:avatar1, text: 'Create your literary masterpiece in one click!' }
        ]},
        {id:2, name: "Benedict Cumberbatch", img:avatar2, messages: [
            { id: 0, name: "Benedict", dispatchTime: '10:15', avatar:avatar2, text: 'Pulvinar cubilia consectetur nostra sed maecenas aliquet himenaeos dolor primis.' },
            { id: 1, name:"Kira", dispatchTime: '11:37', avatar:girl, text: 'Elementum dapibus finibus pellentesque maecenas accumsan leo ullamcorper tellus, class sodales bibendum sagittis natoque orci semper.' },
            { id: 2, name:"Kira", dispatchTime: '16:48', avatar:girl, text: "Commodo nibh magnis tempor massa penatibus arcu nam, et facilisi nunc nisl primis efficitur turpis erat, etiam cursus nascetur lobortis metus elit." },
            { id: 3, name: "Benedict", dispatchTime: '19:54', avatar:avatar2, text: 'Pretium justo consequat maximus faucibus eu cubilia etiam a ac dapibus ultricies, varius vitae pellentesque ut nisi dictumst ligula nostra primis.' }
        ]},
        {id:3, name: "Brad Pitt", img:avatar3, messages: [
            { id: 0, name: "Brad", dispatchTime: '21:03', avatar:avatar3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit ipsum saepe beatae quisquam?' },
            { id: 1, name:"Kira", dispatchTime: '21:28', avatar:girl, text: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
            { id: 2, name: "Brad", dispatchTime: '21:39', avatar:avatar3, text: "Lorem, ipsum dolor." },
            { id: 3, name: "Brad", dispatchTime: '23:18', avatar:avatar3, text: "I'll see what I can do."}
        ]},
        {id:4, name: "Dwayne Johnson", img:avatar4, messages: [
            { id: 0, name:"Kira", dispatchTime: '15:09', avatar:girl, text: 'Lorem, ipsum dolor.' },
            { id: 1, name: "Dwayne", dispatchTime: '15:13', avatar:avatar4, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dicta alias ipsum sunt, expedita nulla aspernatur quis illum recusandae adipisci nihil ad. Culpa, rem?' },
            { id: 2, name: "Dwayne", dispatchTime: '15:57', avatar:avatar4, text: "Vivamus commodo elit condimentum donec at praesent varius, magnis vestibulum curae conubia risus proin ultrices curabitur, venenatis laoreet sodales per turpis nunc." },
            { id: 3, name:"Kira", dispatchTime: '16:01', avatar:girl, text: 'Vivamus cursus porttitor purus suscipit phasellus fusce, cubilia donec pellentesque lectus class nibh nec, duis dictumst sagittis tellus vitae.' }
        ]},
        {id:5, name: "Johnny Depp", img:avatar5, messages: [
            { id: 0, name: "Johnny", dispatchTime: '08:55', avatar:avatar5, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe, nemo doloribus eum quia maxime voluptas.' },
            { id: 1, name:"Kira", dispatchTime: '08:55', avatar:girl, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum non assumenda iste dolore architecto.' },
            { id: 2, name: "Johnny", dispatchTime: '08:57', avatar:avatar5, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, similique nesciunt ut ad perspiciatis et eveniet suscipit quam voluptatum saepe molestias aliquam iure doloribus porro." },
            { id: 3, name:"Kira",  dispatchTime: '08:59', avatar:girl, text: 'Hello! How are you?' }
        ]},
        {id:6, name: "Jensen Ackles", img:avatar6, messages: [
            { id: 0, name: "Jensen", dispatchTime: '13:23', avatar:avatar6, text: 'Pulvinar cubilia consectetur nostra sed maecenas aliquet himenaeos dolor primis.' },
            { id: 1, name: "Jensen", dispatchTime: '13:59', avatar:avatar6, text: 'Elementum dapibus finibus pellentesque maecenas accumsan leo ullamcorper tellus, class sodales bibendum sagittis natoque orci semper.' },
            { id: 2, name:"Kira",  dispatchTime: '16:33', avatar:girl, text: "Commodo nibh magnis tempor massa penatibus arcu nam, et facilisi nunc nisl primis efficitur turpis erat, etiam cursus nascetur lobortis metus elit." },
            { id: 3, name:"Kira",  dispatchTime: '18:40', avatar:girl, text: 'Can we meet tomorrow?' }
        ]},
        {id:7, name: "Timothee Chalamet", img:avatar7, messages: [
            { id: 0, name:"Kira", dispatchTime: '11:34', avatar:girl, text: 'Hello! How are you?' },
            { id: 1, name: "Timothee", dispatchTime: '11:56', avatar:avatar7, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum non assumenda iste dolore architecto.' },
            { id: 2, name: "Timothee", dispatchTime: '13:23', avatar:avatar7, text: "Please call me later." },
            { id: 3, name: "Timothee", dispatchTime: '13:49', avatar:avatar7, text: 'I need to talk to you.' }
        ]}
    ],

    newMessageBody: "",
    
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            console.log(state.users[0]);
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            console.log(state.users[0]);

            let dispatchTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            let newMessage = {
                id: state.users[action.text].messages.length + 1,
                name: "Kira",
                avatar:girl,
                text: body,
                dispatchTime: dispatchTime,
            }
            let newMessageState = {
                ...state.users,
                ...state.users[action.text],
                messages: [...state.users[action.text].messages, newMessage],
                newMessageBody: ''
            }

            return {
                ...state,
                users: state.users.map(
                    user => user.id-1 === Number(action.text)
                        ? {
                            ...user,
                            messages: newMessageState.messages
                        }
                        : user
                ),
                newMessageBody: ''
            };
        default:
            return state;
    }
}
export const sendMessageCreator = (text) => {
    return {
        type: SEND_MESSAGE,
        text: text,
    }
}


export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;