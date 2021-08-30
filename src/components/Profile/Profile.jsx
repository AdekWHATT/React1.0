import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

export default Profile;
