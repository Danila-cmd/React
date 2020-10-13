const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    idName: [
        {
            id: 1,
            name: 'Dimych',
            avatar: 'https://i007.fotocdn.net/s120/2b9f27ebad2f2097/user_xl/2751735467.jpg'
        },
        {id: 2, name: 'Andrey', avatar: 'https://on-desktop.com/wps/Cities_Bridge_in_Busan_035802_.jpg'},
        {
            id: 3,
            name: 'Sveta',
            avatar: 'https://cstor.nn2.ru/users/users/foto/1215030-2017-06-26-photo.jpg.jpg'
        },
        {
            id: 4,
            name: 'Sasha',
            avatar: 'https://avatars.mds.yandex.net/get-pdb/2984243/092e1f07-e5c0-4845-8b58-3533958a5ec8/s1200'
        },
        {
            id: 5,
            name: 'Victor',
            avatar: 'https://avatars.mds.yandex.net/get-pdb/750997/2f4a61ff-0c60-41d6-a2f1-049bc4ee8f21/s1200?webp=false'
        },
        {
            id: 6,
            name: 'Valera',
            avatar: 'https://yt3.ggpht.com/a/AATXAJwh50Vpk8MlHJPBW9sV2UVwXeKrWsyeXxCe-Q=s900-c-k-c0xffffffff-no-rj-mo'
        }
    ],
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How is your level?'},
        {id: 3, message: 'Hey!!!'},
        {id: 4, message: 'How is going!?'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ]
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = action.newMessageBody;

            return {
                ...state,
                messagesData: [...state.messagesData, {id: 8, message: newMessage}]
            };

        default:
            return state
    }
}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;