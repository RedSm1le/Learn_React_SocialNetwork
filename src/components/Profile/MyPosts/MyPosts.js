import React from "react"
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea> </textarea>
                <button>Add Post</button>
            </div>
            <Post message="Hi, how are you?" likesCount ="15"/>
            <Post message="It`s my first post" likesCount ={"20"}/>
        </div>
    )
}

export default MyPosts