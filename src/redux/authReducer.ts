import {stopSubmit} from "redux-form";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'AUTH/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'AUTH/GET-CAPTCHA-URL-SUCCESS';

export type initializationStateType = typeof initializationState

let initializationState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null // if null then captcha is not required
};

function authReducer(state = initializationState, action: ActionsTypes): initializationStateType {
    switch (action.type) {

        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }

        case GET_CAPTCHA_URL_SUCCESS: {
            return {...state, captchaUrl: action.captchaUrl}
        }

        default:
            return state;
    }
}

type ActionsTypes = setUserDataActionType | getCaptchaUrlSActionType;

type setUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type setUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: setUserDataActionPayloadType
}

export function setUserDataActionCreator(userId: number | null, email: string | null,
                                         login: string | null, isAuth: boolean): setUserDataActionType {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            isAuth,
            login
        }
    }
}

type getCaptchaUrlSActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    captchaUrl: string
}

export function getCaptchaUrlSActionCreator(captchaUrl: string): getCaptchaUrlSActionType {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        captchaUrl
    }
}

export const getAuthThunkCreator = () => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await authAPI.getAuth();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserDataActionCreator(id, email, login, true));
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captchaText: string) =>
    async (dispatch: any) => {
        let response = await authAPI.login(email, password, rememberMe, captchaText);
        if (response.data.resultCode === 0) {
            dispatch(getAuthThunkCreator());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrlThunkCreator());
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
            dispatch(stopSubmit("login", {_error: message}))
        }
    }

export const logoutThunkCreator = () => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUserDataActionCreator(null, null, null, false));
    }
}

export const getCaptchaUrlThunkCreator = () => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await authAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSActionCreator(captchaUrl));
}

export default authReducer;