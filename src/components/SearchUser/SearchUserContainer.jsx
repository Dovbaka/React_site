import React from "react";
import {connect} from "react-redux";
import SearchUser from "./SearchUser";
import {
    getUsersThunkCreator,
    setCurrentPageActionCreator, setTotalCountActionCreator,
    setUsersActionCreator,
     subscribeInProgressActionCreator, subscribeThunkCreator, toggleIsFetchingActionCreator,
    unsubscribeThunkCreator
} from "../../redux/searchUserReducer";
import Preloader from "../Common/Preloader/Preloader.jsx";


class SearchUserContainer extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <div>
                {this.props.isFetching ? <Preloader/> :
                    <SearchUser totalUsersCount={this.props.totalUsersCount}
                                pageSize={this.props.pageSize}
                                currentPage={this.props.currentPage}
                                users={this.props.users}
                                onPageChange={this.onPageChange}
                                unsubscribeUser={this.props.unsubscribeUser}
                                subscribeUser={this.props.subscribeUser}
                                subscribeInProgress={this.props.subscribeInProgress}
                                subInProgress = {this.props.subInProgress}
                                />
                                }

            </div>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.searchUserPage.users,
        pageSize: state.searchUserPage.pageSize,
        totalUsersCount: state.searchUserPage.totalUsersCount,
        currentPage: state.searchUserPage.currentPage,
        isFetching: state.searchUserPage.isFetching,
        subInProgress: state.searchUserPage.subInProgress,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        subscribeUser: (userId) => {
            dispatch(subscribeThunkCreator(userId))
        },
        unsubscribeUser: (userId) => {
            dispatch(unsubscribeThunkCreator(userId))
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
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        },
        subscribeInProgress: (subInProgress, userId) => {
            dispatch(subscribeInProgressActionCreator(subInProgress, userId))
        },
        getUsers: (currentPage,pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps) (SearchUserContainer);