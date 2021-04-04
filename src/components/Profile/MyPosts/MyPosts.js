import React from "react"
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = (props) => {

    let postElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef()
    let addPosts = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = " "
    }

    return (
        <div className={s.postBlock}>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>
                <div>
                    <button onClick={addPosts}>Add Post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts