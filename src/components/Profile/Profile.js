import React from "react"
import MyPost from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPost postData={props.profilePage.postData}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                    newPostText={props.profilePage.newPostText}/>

        </div>
    )
}

export default Profile