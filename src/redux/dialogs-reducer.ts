import { InferActionsTypes } from './redux-store';

type IdNameType = {
    id: number,
    name: string,
}

type MessagesDataType = {
    id: number
    message: string
}

let initialState = {
    idName: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' }
    ] as Array<IdNameType>,
    messagesData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How is your level?' },
        { id: 3, message: 'Hey!!!' },
        { id: 4, message: 'How is going!?' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' }
    ] as Array<MessagesDataType>
};


const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {

        case 'SN/DIALOGS/ADD-MESSAGE':
            let newMessage = action.newMessageBody;

            return {
                ...state,
                messagesData: [...state.messagesData, { id: 8, message: newMessage }],
            };

        default:
            return state;
    }
}

export const actions = {
    sendMessage: (newMessageBody: string) => ({ type: 'SN/DIALOGS/ADD-MESSAGE', newMessageBody } as const)
}

export default dialogsReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>