import React from "react"
import MyPost from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div>
            <div>
                <img alt="#"
                     src="https://builtin.com/sites/default/files/styles/ckeditor_optimize/public/inline-images/functional-new-programming-languages.jpg"/>
            </div>
            <div>ava + description</div>
            <MyPost/>

        </div>
    )
}

export default Profile