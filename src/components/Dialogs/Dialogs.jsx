import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/MessageItem";
import React from "react";

const Dialogs = (props) => {

    let newMessageElement = React.createRef();
    let addMess = () => {
        let mess = newMessageElement.current.value
        alert(mess)
    }

    let dialogsElements = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.messages
        .map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
            <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
            <button onClick={addMess}>Отправить сообщение</button>
            </div>
        </div>
    )
}

export default Dialogs