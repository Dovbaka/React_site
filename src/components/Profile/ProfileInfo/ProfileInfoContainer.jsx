import React from 'react';
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};

const ProfileInfoContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;