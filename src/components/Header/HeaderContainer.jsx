import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserDataActionCreator} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true}).then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
                this.props.setUserData(id, email, login);
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state) => {
    return {
        userId: state.searchUserPage.userId,
        isAuth: state.authentication.isAuth,
        login:  state.authentication.login
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (userId, email, login) => {
            dispatch(setUserDataActionCreator(userId, email, login))
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);