const ADD_POST = "ADD-POST"

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"


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
                {id: 5, message: "Пятерка"},
                {id: 6, message: "Шестрека"}
            ]
        }


    },
    _callSubscriber() {
        console.log("State chenged!")
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
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;
window.store = store


