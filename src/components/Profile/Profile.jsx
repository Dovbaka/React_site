import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div>
            <ProfileInfo state={props.state.profile}/>
            <MyPosts basePosts={props.state.basePosts}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile