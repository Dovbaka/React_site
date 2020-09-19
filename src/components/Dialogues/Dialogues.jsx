import React, {useEffect} from 'react'
import style from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Messages/Message";
import {Field, reduxForm} from "redux-form";
import {withRouter} from "react-router-dom";

function Dialogues(props) {

    const messagesEndRef = React.createRef(); //Ref for scrolling to bottom

    const selectedDialogueId = Number(props.location.pathname
        .replace('dialogues', '')
        .replace(/[/]/g, ''));  //Getting selected dialogue id form URL


    let DialogueItems = props.baseDialogues.map(el => (<DialogueItem key={el.id} name={el.userName}
                                                                     path={el.id} avatar={el.photos.small}
                                                                     lastActivityDate={el.lastDialogActivityDate
                                                                         .substring(
                                                                             0, el.lastDialogActivityDate
                                                                             .lastIndexOf('T')
                                                                         )
                                                                         .split('-').reverse().join('.')}/>));

    let Messages = props.baseTexts.map(el => (<Message key={el.id} message={el.body} senderName={el.senderName}
                                                       senderId={el.senderId} userId={props.userId}
                                                       time={el.addedAt.substr(
                                                               el.addedAt.lastIndexOf('T') + 1,5
                                                           )} />));

    const scrollToBottom = () => { // Scroll list to the last message
        messagesEndRef.current.scrollIntoView({behavior: 'smooth'})
    }

    function addNewMessage(value) {
        props.sendMessage(selectedDialogueId, value.newMessageBody);
        props.clearForm("dialogAddMessageForm");
    }

    useEffect(() => {
        if (selectedDialogueId > 0) props.setMessages(selectedDialogueId);
    }, [selectedDialogueId]); //Just on Url change

    useEffect(() => scrollToBottom());

    return (
        <div className={style.dialogues}>
            <div className={style.dialogues_items}>
                {DialogueItems}
            </div>
            <div className={style.messages_items}>
                <div className={style.vl}/>
                <div className={style.message_box}>
                    {Messages}
                    <div ref={messagesEndRef}/>
                </div>
                {selectedDialogueId > 0 ? <AddMessageFormRedux onSubmit={addNewMessage}/> : null}
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={style.input}>
            <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}/>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default withRouter(Dialogues);