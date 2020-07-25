import {authAPI} from "../api/api";

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
            return { ...state, ...action.data, isAuth: true}
        }

        default:
            return state;
    }
}

export function setUserDataActionCreator(userId, email, login){
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    }
}

export const getAuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuth().
        then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
                dispatch(setUserDataActionCreator(id, email, login));
            }
        })
    }
}
export default authReducer;