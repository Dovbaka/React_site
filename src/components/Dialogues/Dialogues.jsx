import React from 'react'
import style from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Messages/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {withRouter} from "react-router-dom";

function Dialogues(props) {

    const selectedDialogueId = Number(props.location.pathname.replace('dialogues','').replace(/[/]/g,''));

    let DialogueItems = props.baseMessages.map(el => (<DialogueItem name={el.name} path={el.pathId}
                                                                    key={el.pathId} avatar={el.img}/>));
    let Messages = props.baseTexts.map(el => (<Message message={el.text} key={el.id}
                                                       sender={props.baseMessages.find((member) => member.pathId === el.senderId)}/>));

    function addNewMessage(value) {
        props.sendMessage(value.newMessageBody)
    }

    return (
        <div className={style.dialogues}>
            <div className={style.dialogues_items}>
                {DialogueItems}
            </div>
            <div className={style.messages_items}>
                <div className={style.vl}> </div>
                <div className={style.message_box}>
                    {Messages}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={style.input}>
            <Field component={Textarea} name={"newMessageBody"} placeholder={"Enter your message"}/>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default withRouter(Dialogues);