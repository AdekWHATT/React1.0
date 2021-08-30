
let renderEntireThree = () => {

}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "hi, how are you", likesCount: 150},
            {id: 2, message: "hi, how are you", likesCount: 3677},
            {id: 3, message: "Третий пост из массива", likesCount: 24},
            {id: 4, message: "Четверый пост из массива", likesCount: 44},
            {id: 5, message: "Пятый пост из массива", likesCount: 24},
            {id: 6, message: "Шестой пост из массива", likesCount: 4}

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

    
}
export const addPost = () => {

    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
    renderEntireThree()
}


export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
renderEntireThree(state)
};

export const subscripe = (observer) => {
    renderEntireThree = observer;
}



export default state;


