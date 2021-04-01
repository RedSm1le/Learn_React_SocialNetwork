import React from "react"
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = (props) => {

    let postElements = props.postData.map(p=><Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postBlock}>
            My posts
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts