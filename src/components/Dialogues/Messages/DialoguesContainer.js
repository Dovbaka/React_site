import React from 'react'
import Dialogues from "../Dialogues";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../../redux/dialoguesReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        baseMessages: state.messagePage.baseMessages,
        baseTexts: state.messagePage.baseTexts,
        newMessageText: state.messagePage.newMessageText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateMessageText: (text) => {
            dispatch(updateMessageActionCreator(text))
        },
    }
};

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues);

export default DialoguesContainer