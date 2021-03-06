const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY" //2
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"}
    ],
    messages: [
        {id: 1, message: "Единица из массива"},
        {id: 2, message: "Двойка из массива"},
        {id: 3, message: "Тройка"},
        {id: 4, message: "Четверка"},
        {id: 5, message: "Пятерка"}
    ],
    newMessageBody: '' // 1
};

const dialogsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;

    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = ''
        state.messages.push({id: 6, message: body})

    }


    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE}) // 6

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer
