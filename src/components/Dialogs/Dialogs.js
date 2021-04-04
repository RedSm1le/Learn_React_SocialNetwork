import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.dialogsPage.messageData.map(m => <Message message={m.message}/>)
    let newMessageElement = React.createRef()
    let sendMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }


    return (
        <div className={s.dialog}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.message}>
                {messageElements}
                <textarea ref={newMessageElement}/>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs