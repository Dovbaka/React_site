import {getAuthThunkCreator} from "./authReducer";
import {Dispatch} from "redux";

const IS_INITIALIZED = 'APP/IS-INITIALIZED';

export type InitialSateType = {
    initialized: boolean
};

let initializationState: InitialSateType = {
    initialized: false
};

const appReducer = (state = initializationState, action: ActionsTypes): InitialSateType => {
    switch (action.type) {

        case IS_INITIALIZED: {
            return {...state, initialized: true}
        }

        default:
            return state;
    }
};

type ActionsTypes = initializingActionType;

export type initializingActionType = {
    type: typeof IS_INITIALIZED
}

export function initializingActionCreator(): initializingActionType {
    return {
        type: IS_INITIALIZED,
    }
}

export const initializeAppThunkCreator = () => (dispatch: any) => {
    dispatch(getAuthThunkCreator()).then(() => dispatch(initializingActionCreator()));
}

export default appReducer;