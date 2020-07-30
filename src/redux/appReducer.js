import {getAuthThunkCreator} from "./authReducer";

const IS_INITIALIZED = 'IS-INITIALIZED';

let initializationState = {
    initialized: false,
};

function appReducer(state = initializationState, action) {
    switch (action.type) {

        case IS_INITIALIZED:{
            return { ...state, initialized: true}
        }

        default:
            return state;
    }
}

export function initializingActionCreator(){
    return {
        type: IS_INITIALIZED,

    }
}

export const initializeAppThunkCreator = () => {
    return (dispatch) => {
        dispatch(getAuthThunkCreator()).then(() => dispatch(initializingActionCreator()));
    }
}

export default appReducer;