import {usersAPI} from "../api/api";

const SUBSCRIBE = 'SEARCH-USER/SUBSCRIBE';
const UNSUBSCRIBE = 'SEARCH-USER/UNSUBSCRIBE';
const SET_USERS = 'SEARCH-USER/SET-USERS';
const SET_CURRENT_PAGE = 'SEARCH-USER/SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SEARCH-USER/SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'SEARCH-USER/TOGGLE-IS-FETCHING';
const SUBSCRIBE_IN_PROGRESS = 'SEARCH-USER/SUBSCRIBE-IN-PROGRESS';

let initializationState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    subInProgress: []
};

function searchUserReducer(state = initializationState, action) {
    switch (action.type) {
        case SUBSCRIBE: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        }


        case UNSUBSCRIBE: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        }

        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }

        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.count}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case SUBSCRIBE_IN_PROGRESS: {
            return {
                ...state,
                subInProgress: action.InProgress ?
                    [...state.subInProgress, action.userId] :
                    state.subInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}

function updateObjectInArray(items, itemId, objPropName, newObjProps) {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}

export function subscribeActionCreator(userId) {
    return {
        type: SUBSCRIBE,
        userId
    }
}

export function unsubscribeActionCreator(userId) {
    return {
        type: UNSUBSCRIBE,
        userId
    }
}

export function setUsersActionCreator(users) {
    return {
        type: SET_USERS,
        users
    }
}

export function setCurrentPageActionCreator(page) {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}

export function setTotalCountActionCreator(count) {
    return {
        type: SET_TOTAL_COUNT,
        count
    }
}

export function toggleIsFetchingActionCreator(isFetching) {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export function subscribeInProgressActionCreator(InProgress, userId) {
    return {
        type: SUBSCRIBE_IN_PROGRESS,
        InProgress,
        userId
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetchingActionCreator(true));
    dispatch(setCurrentPageActionCreator(currentPage));

    let response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetchingActionCreator(false));
    dispatch(setUsersActionCreator(response.items));
    dispatch(setTotalCountActionCreator(response.totalCount - 2500));
}

export const subscribeThunkCreator = (id) => async (dispatch) => {
    dispatch(subscribeInProgressActionCreator(true, id));

    let response = await usersAPI.postSub(id);
    if (response.data.resultCode === 0) {
        dispatch(subscribeActionCreator(id));
    }
    dispatch(subscribeInProgressActionCreator(false, id));
}

export const unsubscribeThunkCreator = (id) => async (dispatch) => {
    dispatch(subscribeInProgressActionCreator(true, id));
    let response = await usersAPI.deleteSub(id);
    if (response.data.resultCode === 0) {
        dispatch(unsubscribeActionCreator(id));
    }
    dispatch(subscribeInProgressActionCreator(false, id));
}


export default searchUserReducer;