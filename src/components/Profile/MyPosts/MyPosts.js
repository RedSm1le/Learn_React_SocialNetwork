import React from "react"
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = () => {
    let postData = [
        {id: 1, message: "Hi", likesCount: 15},
        {id: 2, message: "It`s my first post", likesCount: 23},
        {id: 3, message: "Hello World!!!", likesCount: 8}
    ]
    let postElements = postData.map(p=><Post message={p.message} likesCount={p.likesCount}/>)
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