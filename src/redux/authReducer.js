import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'AUTH/GET-CAPTCHA-URL-SUCCESS';

let initializationState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null then captcha is not required
};

function authReducer(state = initializationState, action) {
    switch (action.type) {

        case SET_USER_DATA: {
            return {...state, ...action.data}
        }

        case GET_CAPTCHA_URL_SUCCESS: {
            return {...state, captchaUrl: action.captchaUrl}
        }

        default:
            return state;
    }
}

export function setUserDataActionCreator(userId, email, login, isAuth) {
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

export function getCaptchaUrlSActionCreator(captchaUrl) {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        captchaUrl
    }
}

export const getAuthThunkCreator = () => async (dispatch) => {
    let response = await authAPI.getAuth();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserDataActionCreator(id, email, login, true));
    }
}

export const loginThunkCreator = (email, password, rememberMe, captchaText) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captchaText);
    if (response.data.resultCode === 0) {
        dispatch(getAuthThunkCreator());
    } else {
        if( response.data.resultCode === 10) {
            dispatch(getCaptchaUrlThunkCreator());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logoutThunkCreator = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUserDataActionCreator(null, null, null, false));
    }
}

export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
    let response = await authAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSActionCreator(captchaUrl));
}

export default authReducer;