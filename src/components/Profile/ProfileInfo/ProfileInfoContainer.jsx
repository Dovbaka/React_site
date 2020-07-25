import React from 'react';
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import Profile from "../Profile";
import {updateUserStatusThunkCreator} from "../../../redux/profileReducer";

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateUserStatus: (profile) => {
            dispatch(updateUserStatusThunkCreator(profile))
        }
    }
};

const ProfileInfoContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;