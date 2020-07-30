import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    setUserProfileThunkCreator,
    setUserStatusThunkCreator,
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.setUserProfile(userId);
        this.props.setUserStatus(userId);
    }

    render() {

        return (
            <div>
                <Profile/>
            </div>
        );
    }

}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
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
    //withAuthRedirect
    )(ProfileContainer);