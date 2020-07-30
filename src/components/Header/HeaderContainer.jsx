import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunkCreator} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
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
        logout: () => {
            dispatch(logoutThunkCreator())
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);