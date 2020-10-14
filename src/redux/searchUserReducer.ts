import {usersAPI} from "../api/api";
import {UsersType} from "../types/types";
import {Dispatch} from "redux";

const SUBSCRIBE = 'SEARCH-USER/SUBSCRIBE';
const UNSUBSCRIBE = 'SEARCH-USER/UNSUBSCRIBE';
const SET_USERS = 'SEARCH-USER/SET-USERS';
const SET_CURRENT_PAGE = 'SEARCH-USER/SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SEARCH-USER/SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'SEARCH-USER/TOGGLE-IS-FETCHING';
const SUBSCRIBE_IN_PROGRESS = 'SEARCH-USER/SUBSCRIBE-IN-PROGRESS';

let initializationState = {
    users: [] as Array<UsersType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    subInProgress: [] as Array<number> //Array of usersId
};

export type initializationStateType = typeof initializationState;

function searchUserReducer(state = initializationState, action: ActionsTypes): initializationStateType {
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

type ActionsTypes = subscribeActionType | unsubscribeActionType | setUsersActionType | setCurrentPageActionType |
    setTotalCountActionType | toggleIsFetchingActionType | subscribeInProgressActionCreator

function updateObjectInArray(items: Array<any>, itemId: number, objPropName: string, newObjProps: any) {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}
type subscribeActionType = {
    type: typeof SUBSCRIBE
    userId: number
}

export function subscribeActionCreator(userId: number): subscribeActionType {
    return {
        type: SUBSCRIBE,
        userId
    }
}

type unsubscribeActionType = {
    type: typeof UNSUBSCRIBE
    userId: number
}

export function unsubscribeActionCreator(userId: number): unsubscribeActionType {
    return {
        type: UNSUBSCRIBE,
        userId
    }
}

type setUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}

export function setUsersActionCreator(users: Array<UsersType>): setUsersActionType {
    return {
        type: SET_USERS,
        users
    }
}

type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    page: number
}

export function setCurrentPageActionCreator(page: number): setCurrentPageActionType {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}

type setTotalCountActionType = {
    type: typeof SET_TOTAL_COUNT
    count: number
}

export function setTotalCountActionCreator(count: number): setTotalCountActionType {
    return {
        type: SET_TOTAL_COUNT,
        count
    }
}

type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export function toggleIsFetchingActionCreator(isFetching: boolean): toggleIsFetchingActionType {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

type subscribeInProgressActionCreator = {
    type: typeof SUBSCRIBE_IN_PROGRESS
    InProgress: boolean
    userId: number
}

export function subscribeInProgressActionCreator(InProgress: boolean, userId: number): subscribeInProgressActionCreator {
    return {
        type: SUBSCRIBE_IN_PROGRESS,
        InProgress,
        userId
    }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) =>
    async (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleIsFetchingActionCreator(true));
    dispatch(setCurrentPageActionCreator(currentPage));

    let response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetchingActionCreator(false));
    dispatch(setUsersActionCreator(response.items));
    dispatch(setTotalCountActionCreator(response.totalCount));
}

export const subscribeThunkCreator = (id: number) =>
    async (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(subscribeInProgressActionCreator(true, id));

    let response = await usersAPI.postSub(id);
    if (response.data.resultCode === 0) {
        dispatch(subscribeActionCreator(id));
    }
    dispatch(subscribeInProgressActionCreator(false, id));
}

export const unsubscribeThunkCreator = (id: number) =>
    async (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(subscribeInProgressActionCreator(true, id));
    let response = await usersAPI.deleteSub(id);
    if (response.data.resultCode === 0) {
        dispatch(unsubscribeActionCreator(id));
    }
    dispatch(subscribeInProgressActionCreator(false, id));
}


export default searchUserReducer;