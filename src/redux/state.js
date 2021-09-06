const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY" //2
const SEND_MESSAGE = "SEND_MESSAGE"         //4


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "hi, how are you", likesCount: 150},
                {id: 2, message: "hi, how are you", likesCount: 3677},
                {id: 3, message: "Третий пост из массива", likesCount: 24},
                {id: 4, message: "Четверый пост из массива", likesCount: 44}


            ],
            newPostText: "Фиксированное значение text-area"
        },
        dialogsPage: {
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
        }


    },
    _callSubscriber() {
        console.log("State changed!")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._state._callSubscriber = observer
    },


    dispatch(action) {
        if (action.type === ADD_POST) {

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = "";
            this._state._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._state._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY ){  //   3
            this._state.dialogsPage.newMessageBody = action.body;
            this._state._callSubscriber(this._state)

        }else if (action.type === SEND_MESSAGE ){//5
            let body = this._state.dialogsPage.newMessageBody;
            let pushMessage = {id: 6, message: body}

            this._state.dialogsPage.messages.push(pushMessage)

            this._state._callSubscriber(this._state)

        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST}) // MyPosts
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})



export const sendMessageCreator = () => ({type: SEND_MESSAGE}) // 6

export const updateNewMessageBodyCreator = (body) =>  //7
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;
window.store = store


