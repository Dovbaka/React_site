import {messAPI} from "../api/api";

const SEND_MESSAGE = 'DIALOGUES/SEND-MESSAGE';
const SET_DIALOGUES = 'DIALOGUES/SET-DIALOGUES';
const SET_MESSAGES = 'DIALOGUES/SET-MESSAGES';
const CLEAR_MESSAGES = 'DIALOGUES/CLEAR-MESSAGES';
const START_MESSAGING_IN_PROGRESS = 'START-MESSAGING-IN-PROGRESS';

export type initializationStateType = typeof initializationState;

let initializationState = {
    baseDialogues: [] as Array<Object>,
    baseTexts: [] as Array<Object>,
    startMessSuccess:[] as Array<number>
};

function dialoguesReducer(state = initializationState, action: any): initializationStateType {
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

type sendMessageActionType = {
    type: typeof SEND_MESSAGE
    payload: string
}

export function sendMessageActionCreator(payload: string): sendMessageActionType{
    return {
        type: SEND_MESSAGE,
        payload
    }
}

type startMessagingActionType = {
    type: typeof START_MESSAGING_IN_PROGRESS
    InProgress: boolean
    userId: number
}

export function startMessagingActionCreator(InProgress: boolean, userId: number): startMessagingActionType {
    return {
        type: START_MESSAGING_IN_PROGRESS,
        InProgress,
        userId
    }
}

type clearMessagesActionType = {
    type: typeof CLEAR_MESSAGES
}

export function clearMessagesActionCreator(): clearMessagesActionType {
    return {
        type: CLEAR_MESSAGES
    }
}

type setDialoguesActionType = {
    type: typeof SET_DIALOGUES
    dialogues: Array<Object>
}

export function setDialoguesActionCreator(dialogues: Array<Object>): setDialoguesActionType {
    return {
        type: SET_DIALOGUES,
        dialogues
    }
}

type setMessagesActionType = {
    type: typeof SET_MESSAGES,
    messages: Array<Object>
}

export function setMessagesActionCreator(messages: Array<Object>): setMessagesActionType {
    return {
        type: SET_MESSAGES,
        messages
    }
}

export const startMessagingThunkCreator = (userId: number) => async (dispatch: any) => {
    let response = await messAPI.startMess(userId);
    if (response.data.resultCode === 0) {
        dispatch(startMessagingActionCreator(true, userId));
    }
}

export const setDialoguesThunkCreator = () => async (dispatch: any) => {
    let response = await messAPI.getDialogs();
    dispatch(setDialoguesActionCreator(response.data));
    dispatch(startMessagingActionCreator(false, 0));
}

export const setMessagesThunkCreator = (userId: number) => async (dispatch: any) => {
    let response = await messAPI.getMess(userId);
    dispatch(setMessagesActionCreator(response.data.items));
}

export const sendMessagesThunkCreator = (userId: number, body: string) => async (dispatch: any) => {
    let response = await messAPI.sendMess(userId, body);
    if (response.data.resultCode === 0) {
        dispatch(sendMessageActionCreator(response.data.data.message));
    }
}

export default dialoguesReducer;