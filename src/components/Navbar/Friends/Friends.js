import React from "react";
import s from "./Friends.module.css"

const Friends = (props) => {

    return (
        <div className={s.friends}>
            <div>
                <img alt="#"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcWvrT-biXJlXb5vlxlqbKC9PYbQfnujWcQ&usqp=CAU"/>
            </div>
            <div className={s.name}>{props.name}</div>
        </div>

    )
}
export default Friends

