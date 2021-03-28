import React from "react"
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img alt="#"
                    src="https://builtin.com/sites/default/files/styles/ckeditor_optimize/public/inline-images/functional-new-programming-languages.jpg"/>
            </div>
            <div>ava + description</div>
            <MyPosts/>

        </div>
    )
}

export default Profile