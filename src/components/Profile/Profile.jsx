import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

function Profile() {
    return (
        <div>
            <ProfileInfoContainer/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile