import React from "react";
import {connect} from "react-redux";
import SearchUser from "./SearchUser";
import {
    setCurrentPageActionCreator, setTotalCountActionCreator,
    setUsersActionCreator,
    subscribeActionCreator, subscribeInProgressActionCreator, toggleIsFetchingActionCreator,
    unsubscribeActionCreator
} from "../../redux/searchUserReducer";
import Preloader from "../Common/Preloader/Preloader.jsx";
import {usersAPI} from "../../api/api";


class SearchUserContainer extends React.Component{

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
            this.props.setTotalCount(response.totalCount-2500);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items)});
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
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        },
        subscribeInProgress: (subInProgress, userId) => {
            dispatch(subscribeInProgressActionCreator(subInProgress, userId))
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps) (SearchUserContainer);