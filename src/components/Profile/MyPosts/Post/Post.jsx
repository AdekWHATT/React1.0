import c from './Post.module.css';

const Post = (props) => {
  
    return (
        <div className={c.item}>
            <img src="https://topmsg.ru/wp-content/uploads/anonymous.jpg" />
            
            
            
            {props.message}
            <div>
            <span>{props.likesCount}</span>
        </div>
        </div>

    )
}

export default Post;
