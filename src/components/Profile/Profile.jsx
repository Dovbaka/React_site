import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

function Profile(props) {
    return (
        <div>
            <ProfileInfoContainer isOwner={props.isOwner}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile