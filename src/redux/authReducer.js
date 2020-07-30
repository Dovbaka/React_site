import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

let initializationState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

function authReducer(state = initializationState, action) {
    switch (action.type) {

        case SET_USER_DATA:{
            return { ...state, ...action.data}
        }

        default:
            return state;
    }
}

export function setUserDataActionCreator(userId, email, login, isAuth){
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
            isAuth
        }
    }
}

export const getAuthThunkCreator = () => {
    return (dispatch) => {
        return authAPI.getAuth().then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
                dispatch(setUserDataActionCreator(id, email, login, true));
            }
        })
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if(response.data.resultCode === 0){
                dispatch(getAuthThunkCreator());
            }
            else{
                let message = response.data.messages.length > 0? response.data.messages[0] : "Some Error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if(response.data.resultCode === 0){
                dispatch(setUserDataActionCreator(null, null, null, false));
            }
        })
    }
}
export default authReducer;