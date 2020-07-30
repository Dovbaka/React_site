import React from 'react';
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