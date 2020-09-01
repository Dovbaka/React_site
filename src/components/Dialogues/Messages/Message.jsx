import React from 'react'
import style from '../Dialogues.module.css'
import avatar from "../../../assets/images/avatar.png"


function Message(props) {
    return (
        <div className={style.message}><img src={props.sender.img} alt='Avatar'/>
            <div>
                <h3>{props.sender.name}</h3>
                <p>{props.message}</p>
            </div>
        </div>
    )
}


export default Message