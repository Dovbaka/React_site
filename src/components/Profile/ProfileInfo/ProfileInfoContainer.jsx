import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {
    saveProfileInfoThunkCreator,
    updateUserPhotoThunkCreator,
    updateUserStatusThunkCreator
} from "../../../redux/profileReducer";
import React from "react";

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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer);
