const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts: [
        {id: 1, message: "hi, how are you", likesCount: 150},
        {id: 2, message: "hi, how are you", likesCount: 3677},
        {id: 3, message: "Третий пост из массива", likesCount: 24},
        {id: 4, message: "Четверый пост из массива", likesCount: 44}


    ],
    newPostText: "Введите текст"
};



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = ' ';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST}) // MyPosts
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer

