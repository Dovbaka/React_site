import React from 'react'
import style from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Messages/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

function Dialogues(props) {

    let Dialogues = props.baseMessages.map(el => (<DialogueItem name={el.name} path={el.pathId} key={el.pathId}/>));
    let Messages = props.baseTexts.map(el => (<Message message={el.text} key={el.id}/>));

    function addNewMessage(value) {
        props.sendMessage(value.newMessageBody)
    }

    return (
        <div className={style.dialogues}>
            <div className={style.dialogues_items}>
                {Dialogues}
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

export default Dialogues