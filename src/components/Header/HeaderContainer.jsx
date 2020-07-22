import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthThunkCreator} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setUserData();
    }

    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state) => {
    return {
        userId: state.authentication.userId,
        isAuth: state.authentication.isAuth,
        login:  state.authentication.login
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (userId, email, login) => {
            dispatch(getAuthThunkCreator(userId, email, login))
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);