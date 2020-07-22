import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileThunkCreator} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.setUserProfile(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.authentication.isAuth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileThunkCreator(profile))
        }
    }
};

let withRout = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withRout);