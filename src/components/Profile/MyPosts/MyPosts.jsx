import c from './MyPosts.module.css';
import Post from './Post/Post'
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElement = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newpostElement = React.createRef();


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newpostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }
    return (
        <div>

            <div className={c.postsBlock}>
                <h3>My Posts</h3>
            </div>
            <div>
                <div>


                    <textarea onChange={onPostChange}
                              ref={newpostElement}

                              value={props.newPostText}/>


                </div>
                <div>


                    <button onClick={addPost}>Add post</button>


                </div>
            </div>
            <div className={c.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;
