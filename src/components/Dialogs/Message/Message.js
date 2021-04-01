import React from "react";
import s from "./../Dialogs.module.css"

const Message = (props) => {
    return (
        <div className={s.messageItem}>
            <div className="messageItem">{props.message}</div>
        </div>
    )
}

export default Message
