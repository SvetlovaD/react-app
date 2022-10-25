const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    users: [
        {id:1, name: "Alex", messages: [
            { id: 0, dispatchTime: '16:34', text: 'Hello! How are you?' },
            { id: 1, dispatchTime: '17:59', text: 'The online text generator allows you to specify the number of words that will form the number of paragraphs you specify.' },
            { id: 2, dispatchTime: '18:03', text: "However, the generated text will not make sense, but that's not what we need!" },
            { id: 3, dispatchTime: '18:40', text: 'Create your literary masterpiece in one click!' }
        ]},
        {id:2, name: "Leo", messages: [
            { id: 0, dispatchTime: '10:15', text: 'Pulvinar cubilia consectetur nostra sed maecenas aliquet himenaeos dolor primis.' },
            { id: 1, dispatchTime: '11:37', text: 'Elementum dapibus finibus pellentesque maecenas accumsan leo ullamcorper tellus, class sodales bibendum sagittis natoque orci semper.' },
            { id: 2, dispatchTime: '16:48', text: "Commodo nibh magnis tempor massa penatibus arcu nam, et facilisi nunc nisl primis efficitur turpis erat, etiam cursus nascetur lobortis metus elit." },
            { id: 3, dispatchTime: '19:54', text: 'Pretium justo consequat maximus faucibus eu cubilia etiam a ac dapibus ultricies, varius vitae pellentesque ut nisi dictumst ligula nostra primis.' }
        ]},
        {id:3, name: "Nora", messages: [
            { id: 0, dispatchTime: '21:03', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit ipsum saepe beatae quisquam?' },
            { id: 1, dispatchTime: '21:28', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
            { id: 2, dispatchTime: '21:39', text: "Lorem, ipsum dolor." },
            { id: 3, dispatchTime: '23:18', text: "I'll see what I can do."}
        ]},
        {id:4, name: "Lizzy", messages: [
            { id: 0, dispatchTime: '15:09', text: 'Lorem, ipsum dolor.' },
            { id: 1, dispatchTime: '15:13', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dicta alias ipsum sunt, expedita nulla aspernatur quis illum recusandae adipisci nihil ad. Culpa, rem?' },
            { id: 2, dispatchTime: '15:57', text: "Vivamus commodo elit condimentum donec at praesent varius, magnis vestibulum curae conubia risus proin ultrices curabitur, venenatis laoreet sodales per turpis nunc." },
            { id: 3, dispatchTime: '16:01', text: 'Vivamus cursus porttitor purus suscipit phasellus fusce, cubilia donec pellentesque lectus class nibh nec, duis dictumst sagittis tellus vitae.' }
        ]},
        {id:5, name: "Cleo", messages: [
            { id: 0, dispatchTime: '08:55', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe, nemo doloribus eum quia maxime voluptas.' },
            { id: 1, dispatchTime: '08:55', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum non assumenda iste dolore architecto.' },
            { id: 2, dispatchTime: '08:57', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, similique nesciunt ut ad perspiciatis et eveniet suscipit quam voluptatum saepe molestias aliquam iure doloribus porro." },
            { id: 3, dispatchTime: '08:59', text: 'Hello! How are you?' }
        ]},
        {id:6, name: "Brian", messages: [
            { id: 0, dispatchTime: '13:23', text: 'Pulvinar cubilia consectetur nostra sed maecenas aliquet himenaeos dolor primis.' },
            { id: 1, dispatchTime: '13:59', text: 'Elementum dapibus finibus pellentesque maecenas accumsan leo ullamcorper tellus, class sodales bibendum sagittis natoque orci semper.' },
            { id: 2, dispatchTime: '16:33', text: "Commodo nibh magnis tempor massa penatibus arcu nam, et facilisi nunc nisl primis efficitur turpis erat, etiam cursus nascetur lobortis metus elit." },
            { id: 3, dispatchTime: '18:40', text: 'Can we meet tomorrow?' }
        ]},
        {id:7, name: "Dora", messages: [
            { id: 0, dispatchTime: '11:34', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe, nemo doloribus eum quia maxime voluptas.' },
            { id: 1, dispatchTime: '11:56', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum non assumenda iste dolore architecto.' },
            { id: 2, dispatchTime: '13:23', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, similique nesciunt ut ad perspiciatis et eveniet suscipit quam voluptatum saepe molestias aliquam iure doloribus porro." },
            { id: 3, dispatchTime: '13:49', text: 'I need to talk to you.' }
        ]},
        {id:8, name:"Lucy", messages: [
            { id: 0, dispatchTime: '20:12', text: 'Hello! How are you?' },
            { id: 1, dispatchTime: '21:03', text: 'The online text generator allows you to specify the number of words that will form the number of paragraphs you specify.' },
            { id: 2, dispatchTime: '21:14', text: "However, the generated text will not make sense, but that's not what we need!" },
            { id: 3, dispatchTime: '22:39', text: 'Please call me later.' }
        ]}
    ],

    dialogs: [
        { id: 0, dispatchTime: '16:34', text: 'Create your literary masterpiece in one click!' },
            { id: 1, dispatchTime: '17:03', text: 'The online text generator allows you to specify the number of words that will form the number of paragraphs you specify.' },
            { id: 2, dispatchTime: '17:59', text: "However, the generated text will not make sense, but that's not what we need!" },
            { id: 3, dispatchTime: '18:40', text: 'Hello! How are you?' },

    ],
    newMessageBody: "",
    currentDialog: 0
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