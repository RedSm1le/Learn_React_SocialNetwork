import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"

const DialogItem = (props) => {
    return (
        <div className="dialogItem">
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className="messageItem">
            <div className="messageItem">{props.message}</div>
        </div>
    )
}

let dialogsData = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Yana"},
    {id: 3, name: "Sasha"},
    {id: 4, name: "Valera"},
    {id: 5, name: "Sveta"}
]
let messageData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are your?"},
    {id: 3, message: "YO!!!"}
]

let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
let messageElements = messageData.map(m => <Message message={m.message}/>)

const Dialogs = () => {
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