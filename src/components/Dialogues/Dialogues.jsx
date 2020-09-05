import React, {useEffect} from 'react'
import style from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Messages/Message";
import {Field, reduxForm} from "redux-form";
import {withRouter} from "react-router-dom";

function Dialogues(props) {

    const messagesEndRef = React.createRef();

    const selectedDialogueId = Number(props.location.pathname.replace('dialogues','').replace(/[/]/g,''));

    let DialogueItems = props.baseDialogues.map(el => (<DialogueItem name={el.userName} path={el.id}
                                                                 key={el.id} avatar={el.photos.small}/>));
    let Messages = props.baseTexts.map(el => (<Message message={el.items.body} key={el.items.id}
                                                       sender={props.baseDialogues.find((member) => member.id === el.recipientId)}/>));

    const scrollToBottom = () => { // Scroll list to the last message
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    function addNewMessage(value) {
        props.sendMessage(value.newMessageBody, 120000);
    }

    useEffect(() => {
        scrollToBottom();
    });

    return (
        <div className={style.dialogues}>
            <div className={style.dialogues_items}>
                {DialogueItems}
            </div>
            <div className={style.messages_items}>
                <div className={style.vl}> </div>
                <div className={style.message_box}>
                    {Messages}
                    <div ref={messagesEndRef}/>
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
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