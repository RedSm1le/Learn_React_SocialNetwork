import React from "react"
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt="#"
                     src="https://builtin.com/sites/default/files/styles/ckeditor_optimize/public/inline-images/functional-new-programming-languages.jpg"/>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}

export default ProfileInfo