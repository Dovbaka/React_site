import React from "react";
import Dialogues from "./Dialogues";
import {
    clearMessagesActionCreator,
    sendMessagesThunkCreator,
    setDialoguesThunkCreator,
    setMessagesThunkCreator
} from "../../redux/dialoguesReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {reset} from "redux-form";

class DialoguesContainer extends React.Component {

    componentDidMount() {
        this.props.clearMessages();
        this.props.setDialogues();
    }

    render() {
        return <Dialogues {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        baseDialogues: state.messagePage.baseDialogues,
        baseTexts: state.messagePage.baseTexts,
        newMessageText: state.messagePage.newMessageText,
        userId: state.authentication.userId
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (id, value) => {
            dispatch(sendMessagesThunkCreator(id, value));
        },
        setDialogues: () => {
            dispatch(setDialoguesThunkCreator());
        },
        setMessages: (userId) => {
            dispatch(setMessagesThunkCreator(userId));
        },
        clearMessages: () => {
            dispatch(clearMessagesActionCreator())
        },
        clearForm: (formName) => {
            dispatch(reset(formName));
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialoguesContainer)