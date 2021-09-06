import c from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={c.image_1}
                     src="https://www.firestock.ru/download/s/defct9pjnmz6pkn/805.jpg"></img>
            </div>
            <div className={c.descriptionBlock}>
                Ava + Description
            </div>
        </div>
    )
}

export default ProfileInfo;
