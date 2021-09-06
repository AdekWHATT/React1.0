import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "hi, how are you", likesCount: 150},
                {id: 2, message: "hi, how are you", likesCount: 3677},
                {id: 3, message: "Третий пост из массива", likesCount: 24},
                {id: 4, message: "Четверый пост из массива", likesCount: 44}


            ],
            newPostText: "Введите текст"
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

    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._state._callSubscriber = observer
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state._callSubscriber(this._state)

    }
}


export default store;
window.store = store


