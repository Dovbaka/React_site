import React from 'react'
import Dialogues from "./Dialogues";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/dialoguesReducer";
import {connect} from "react-redux";

/*function DialoguesContainer(props) {



    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().messagePage;
                debugger;
                function sendMess() {
                    store.dispatch(sendMessageActionCreator());
                }

                function onMessageChange(text) {
                    store.dispatch(updateMessageActionCreator(text));
                }

                return <Dialogues sendMessage={sendMess} updateMessageText={onMessageChange}
                                  baseMessages={state.baseMessages}
                                  baseTexts={state.baseTexts}
                                  newMessageText={state.newMessageText}/>
            }
        }
        </StoreContext.Consumer>
    )
}*/

let mapStateToProps = (state) => {
    return {
        baseMessages: state.messagePage.baseMessages,
        baseTexts: state.messagePage.baseTexts,
        newMessageText: state.messagePage.newMessageText,
        isAuth: state.authentication.isAuth
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