import c from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={c.image_1}
                     src="https://www.railway-technology.com/wp-content/uploads/sites/24/2020/10/Feature-Image-Top-ten-rail-operators-in-2020.jpg"></img>
            </div>
            <div className={c.descriptionBlock}>
                Ava + Description
            </div>
        </div>
    )
}

export default ProfileInfo;
