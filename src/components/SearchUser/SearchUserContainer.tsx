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
import Pagination from "../Pagination/Pagination";
import {UsersType} from "../../types/types";
import {AppStateType} from "../../redux/storeRedux";

type MapStateToPropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    subInProgress: Array<number>
    users: Array<UsersType>
}

type MapDispatchToPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    unsubscribeUser: (userId: number) => void
    subscribeUser: (userId: number) => void
    subscribeInProgress: (subInProgress: boolean, userId: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

class SearchUserContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
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

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        subInProgress: getSubInProgress(state),
    }
};

let mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        subscribeUser: (userId: number) => {
            dispatch(subscribeThunkCreator(userId))
        },
        unsubscribeUser: (userId: number) => {
            dispatch(unsubscribeThunkCreator(userId))
        },
        subscribeInProgress: (subInProgress: boolean, userId: number) => {
            dispatch(subscribeInProgressActionCreator(subInProgress, userId))
        },
        getUsers: (currentPage: number, pageSize: number) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUserContainer);