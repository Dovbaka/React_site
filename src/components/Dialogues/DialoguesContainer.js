import React from "react";
import Dialogues from "./Dialogues";
import {
    sendMessageActionCreator,
    setDialoguesThunkCreator,
    setMessagesThunkCreator
} from "../../redux/dialoguesReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialoguesContainer extends React.Component {

    componentDidMount() {
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
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (value, id) => {
            dispatch(sendMessageActionCreator(value, id));
        },
        setDialogues: () => {
            dispatch(setDialoguesThunkCreator());
        },
        setMessages: (userId) => {
            dispatch(setMessagesThunkCreator(userId));
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialoguesContainer)