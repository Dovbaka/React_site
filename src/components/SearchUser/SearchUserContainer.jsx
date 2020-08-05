import React from "react";
import {connect} from "react-redux";
import SearchUser from "./SearchUser";
import {
    getUsersThunkCreator,
    subscribeInProgressActionCreator, subscribeThunkCreator,
    unsubscribeThunkCreator
} from "../../redux/searchUserReducer";
import Preloader from "../Common/Preloader/Preloader.jsx";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getSubInProgress,
    getTotalUsersCount,
    getUsers
} from "../../redux/searchUserSelector";
import Pagination from "../Pagination/Pagenation";


class SearchUserContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <div>
            <Pagination totalItemsCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChange={this.onPageChange}
                        portionSize={20}/>

            {this.props.isFetching ? <Preloader/> :
                <SearchUser users={this.props.users}
                            unsubscribeUser={this.props.unsubscribeUser}
                            subscribeUser={this.props.subscribeUser}
                            subscribeInProgress={this.props.subscribeInProgress}
                            subInProgress={this.props.subInProgress}
                />
            }
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        subInProgress: getSubInProgress(state),
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
        subscribeInProgress: (subInProgress, userId) => {
            dispatch(subscribeInProgressActionCreator(subInProgress, userId))
        },
        getUsers: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUserContainer);