import React from "react"
import MyPost from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPost postData={props.profilePage.postData} addPost={props.addPost}/>

        </div>
    )
}

export default Profile