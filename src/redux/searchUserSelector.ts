import {AppStateType} from "./storeRedux";

export const getUsers = (state: AppStateType) => {
    return state.searchUserPage.users;
}

export const getPageSize = (state: AppStateType) => {
    return state.searchUserPage.pageSize;
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.searchUserPage.totalUsersCount;
}

export const getCurrentPage = (state: AppStateType) => {
    return state.searchUserPage.currentPage;
}

export const getIsFetching = (state: AppStateType) => {
    return state.searchUserPage.isFetching;
}

export const getSubInProgress = (state: AppStateType) => {
    return state.searchUserPage.subInProgress;
}