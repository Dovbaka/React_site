import React from 'react'
import Dialogues from "./Dialogues";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/dialoguesReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        baseMessages: state.messagePage.baseMessages,
        baseTexts: state.messagePage.baseTexts,
        newMessageText: state.messagePage.newMessageText,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogues)