import React from "react";
import {connect} from "react-redux";
import SearchUser from "./SearchUser";
import {
    setCurrentPageActionCreator, setTotalCountActionCreator,
    setUsersActionCreator,
    subscribeActionCreator,
    unsubscribeActionCreator
} from "../../redux/searchUserReducer";

let mapStateToProps = (state) => {
    return {
        users: state.searchUserPage.users,
        pageSize: state.searchUserPage.pageSize,
        totalUsersCount: state.searchUserPage.totalUsersCount,
        currentPage: state.searchUserPage.currentPage
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
        setCurrentPage: (page) => {
            dispatch(setCurrentPageActionCreator(page))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountActionCreator(totalCount))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (SearchUser);