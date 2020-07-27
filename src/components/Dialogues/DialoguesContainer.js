import React from 'react'
import Dialogues from "./Dialogues";
import {sendMessageActionCreator} from "../../redux/dialoguesReducer";
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
        sendMessage: (value) => {
            dispatch(sendMessageActionCreator(value))
        },
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogues)