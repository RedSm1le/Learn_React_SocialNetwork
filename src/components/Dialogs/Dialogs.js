import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.dialogsPage.messageData.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialog}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.message}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs