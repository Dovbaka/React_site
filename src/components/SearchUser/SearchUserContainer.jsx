import React from "react";
import {connect} from "react-redux";
import SearchUser from "./SearchUser";
import {setUsersActionCreator, subscribeActionCreator, unsubscribeActionCreator} from "../../redux/searchUserReducer";

let mapStateToProps = (state) => {
    return {
        users: state.searchUserPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        subscribeUser: (userId) => {
            dispatch(subscribeActionCreator(userId))
        },
        unsubscribeUser: (userId) => {
            dispatch(unsubscribeActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (SearchUser);