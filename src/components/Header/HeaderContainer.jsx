import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserDataActionCreator} from "../../redux/authReducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        usersAPI.getAuth().then(response => {
            if(response.resultCode === 0){
                let {id, email, login} = response.data;
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