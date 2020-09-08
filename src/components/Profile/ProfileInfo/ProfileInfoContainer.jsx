import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {
    saveProfileInfoThunkCreator,
    updateUserPhotoThunkCreator,
    updateUserStatusThunkCreator
} from "../../../redux/profileReducer";
import React from "react";
import {startMessagingThunkCreator} from "../../../redux/dialoguesReducer";

function ProfileInfoContainer (props) {
    return (
        <div>
            <ProfileInfo {...props}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.authentication.userId,
        startMessSuccess: state.messagePage.startMessSuccess
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateUserStatus: (profile) => {
            dispatch(updateUserStatusThunkCreator(profile))
        },
        updateUserPhoto: (photo) => {
            dispatch(updateUserPhotoThunkCreator(photo))
        },
        saveProfileInfo: (profile) => {
            dispatch(saveProfileInfoThunkCreator(profile))
        },
        startMessaging: (userId) => {
            dispatch(startMessagingThunkCreator(userId))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer);
