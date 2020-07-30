export const getUsers = (state) => {
    return state.searchUserPage.users;
}

export const getPageSize = (state) => {
    return state.searchUserPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.searchUserPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.searchUserPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.searchUserPage.isFetching;
}

export const getSubInProgress = (state) => {
    return state.searchUserPage.subInProgress;
}