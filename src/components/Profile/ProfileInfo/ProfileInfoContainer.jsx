import React from 'react';
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";

let mapStateToProps = (state) => {
    return {
        avatar: state.profilePage.profile.avatar,
        name: state.profilePage.profile.name,
        surname: state.profilePage.profile.surname,
        description: state.profilePage.profile.description
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};

const ProfileInfoContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;