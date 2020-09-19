import {messAPI} from "../api/api";

const SEND_MESSAGE = 'DIALOGUES/SEND-MESSAGE';
const SET_DIALOGUES = 'DIALOGUES/SET-DIALOGUES';
const SET_MESSAGES = 'DIALOGUES/SET-MESSAGES';
const CLEAR_MESSAGES = 'DIALOGUES/CLEAR-MESSAGES';
const START_MESSAGING_IN_PROGRESS = 'START-MESSAGING-IN-PROGRESS';

let initializationState = {
    baseDialogues: [],
    baseTexts: [],
    startMessSuccess:[]
};

function dialoguesReducer(state = initializationState, action) {
    switch (action.type) {

        case SEND_MESSAGE: {
            return {...state, baseTexts: [...state.baseTexts, action.payload]}
        }

        case SET_DIALOGUES: {
            return {...state, baseDialogues: action.dialogues}
        }

        case SET_MESSAGES: {
            return {...state, baseTexts: action.messages}
        }

        case START_MESSAGING_IN_PROGRESS: {
            return {
                ...state,
                startMessSuccess: action.InProgress ?
                    [...state.startMessSuccess, action.userId] :
                    []
            }
        }

        case CLEAR_MESSAGES: {
            return {...state, baseTexts: []}
        }

        default:
            return state;
    }
}

export function sendMessageActionCreator(payload) {
    return {
        type: SEND_MESSAGE,
        payload
    }
}

export function subscribeInProgressActionCreator(InProgress, userId) {
    return {
        type: START_MESSAGING_IN_PROGRESS,
        InProgress,
        userId
    }
}

export function clearMessagesActionCreator() {
    return {
        type: CLEAR_MESSAGES
    }
}

export function setDialoguesActionCreator(dialogues) {
    return {
        type: SET_DIALOGUES,
        dialogues
    }
}

export function setMessagesActionCreator(messages) {
    return {
        type: SET_MESSAGES,
        messages
    }
}

export const startMessagingThunkCreator = (userId) => async (dispatch) => {
    let response = await messAPI.startMess(userId);
    if (response.data.resultCode === 0) {
        dispatch(subscribeInProgressActionCreator(true, userId));
    }
}

export const setDialoguesThunkCreator = () => async (dispatch) => {
    let response = await messAPI.getDialogs();
    dispatch(setDialoguesActionCreator(response.data));
    dispatch(subscribeInProgressActionCreator(false, 0));
}

export const setMessagesThunkCreator = (userId) => async (dispatch) => {
    let response = await messAPI.getMess(userId);
    dispatch(setMessagesActionCreator(response.data.items));
}

export const sendMessagesThunkCreator = (userId, body) => async (dispatch) => {
    let response = await messAPI.sendMess(userId, body);
    if (response.data.resultCode === 0) {
        dispatch(sendMessageActionCreator(response.data.data.message));
    }
}

export default dialoguesReducer;