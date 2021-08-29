import c from './MyPosts.module.css';
import Post from './Post/Post'
import React from "react";

const MyPosts = (props) => {

    let postsElement = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/> )

    let newpostElement = React.createRef();


    let addPost = () => {
        let text = newpostElement.current.value
        alert(text)
    }
    return (
        <div>

            <div className={c.postsBlock}>
                <h3>My Posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newpostElement}></textarea>
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
