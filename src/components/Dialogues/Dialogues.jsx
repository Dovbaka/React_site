import React from 'react'
import style from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Messages/Message";

function Dialogues(props) {

    let Dialogues = props.baseMessages.map(el => (<DialogueItem name={el.name} path={el.pathId}/>));
    let Messages = props.baseTexts.map(el => (<Message message={el.text}/>));

    let writeMessage = React.createRef();

    function sendMess() {
        props.sendMessage();
    }

    function onMessageChange() {
        let text = writeMessage.current.value;
        props.updateMessageText(text);
    }

    return (
        <div className={style.dialogues}>
            <div className={style.dialogues_items}>
                {Dialogues}
            </div>
            <div className={style.messages_items}>
                <div className={style.message_box}>
                    {Messages}
                </div>
                <div className={style.input}>
                    <textarea ref={writeMessage} onChange={onMessageChange} value={props.newMessageText}/>
                    <button onClick={sendMess}>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogues