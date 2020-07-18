import React from "react";
import {connect} from "react-redux";
import SearchUser from "./SearchUser";
import {
    setCurrentPageActionCreator, setTotalCountActionCreator,
    setUsersActionCreator,
    subscribeActionCreator, toggleIsFetchingActionCreator,
    unsubscribeActionCreator
} from "../../redux/searchUserReducer";
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader.jsx";


class SearchUserContainer extends React.Component{

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount-2500);
            /*[{id: 1, fullName: "Arthur Morgan", status: "Where's Lenny?", location:{city: "Boston", country: "America"}, subscribed: true, avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x"},
                {id: 2, fullName: "John Marston", status: "I'm gonna take my horse to the old time road", location:{city: "Black Water", country: "America"}, subscribed: true, avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x" },
                {id: 3, fullName: "Dutch van der Linde", status: "I have a god damn plan! We need just one score!", location:{city: "Nuevo Paraíso", country: "Mexico"}, subscribed: false, avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x" },
                {id: 4, fullName: "Lenny Summers", status: "I'm dead LOL", location:{city: "Boston", country: "America"}, subscribed: false, avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x" },
            ]*/
        });
    }

    onPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        &count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)});
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
                                subscribeUser={this.props.subscribeUser}/>}

            </div>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.searchUserPage.users,
        pageSize: state.searchUserPage.pageSize,
        totalUsersCount: state.searchUserPage.totalUsersCount,
        currentPage: state.searchUserPage.currentPage,
        isFetching: state.searchUserPage.isFetching
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (SearchUserContainer);