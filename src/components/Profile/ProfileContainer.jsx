import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    setUserProfileThunkCreator,
    setUserStatusThunkCreator,
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        this.props.setUserProfile(userId);
        this.props.setUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return (
            <div>
                <Profile isOwner={this.props.match.params.userId == this.props.userId}/>
            </div>
        );
    }

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
        setUserProfile: (profile) => {
            dispatch(setUserProfileThunkCreator(profile))
        },
        setUserStatus: (profile) => {
            dispatch(setUserStatusThunkCreator(profile))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileContainer);