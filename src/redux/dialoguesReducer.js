import avatar from '../assets/images/avatar.png';
import {messAPI} from "../api/api";

const SEND_MESSAGE = 'DIALOGUES/SEND-MESSAGE';
const SET_DIALOGUES = 'DIALOGUES/SET-DIALOGUES';
const SET_MESSAGES = 'DIALOGUES/SET-MESSAGES';

let initializationState = {
    baseDialogues: [],
    baseTexts: []
};

function dialoguesReducer(state = initializationState, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            let message = {
                id: state.baseTexts.length + 1,
                text: action.value,
                senderId: action.id,
            };
            return {...state, baseTexts: [...state.baseTexts, message]}
        }

        case SET_DIALOGUES: {
            return {...state, baseDialogues: action.dialogues}
        }

        case SET_MESSAGES: {
            return {...state, baseTexts: action.messages}
        }

        default:
            return state;
    }
}

export function sendMessageActionCreator(value, id) {
    return {
        type: SEND_MESSAGE,
        value,
        id
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

export const setDialoguesThunkCreator = () => async (dispatch) => {
    let response = await messAPI.getDialogs();
    dispatch(setDialoguesActionCreator(response.data));
}

export const setMessagesThunkCreator = (userId) => async (dispatch) => {
    let response = await messAPI.getMess(userId);
    dispatch(setMessagesActionCreator(response.data));
}

export default dialoguesReducer;