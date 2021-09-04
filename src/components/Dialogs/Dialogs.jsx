import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/MessageItem";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


            const Dialogs = (props) => {


    let state = props.state.getState().dialogsPage

    let newMessageElement = React.createRef();

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = state.messages
        .map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {}
    props.store.dispatch(sendMessageCreator())
    let onNewMessageChange = (e) => {
       let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>

            <div>
                <textarea
                    onChange={onNewMessageChange}
                    value={newMessageBody}
                    placeholder="Введи сообщение"></textarea>

            </div>

            <div>
                <button onClick={onSendMessageClick}>Отправить сообщение</button>
            </div>


        </div>
    )
}

export default Dialogs