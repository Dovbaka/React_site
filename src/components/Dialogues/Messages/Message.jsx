import React from 'react'
import style from '../Dialogues.module.css'
import avatar from "../../../assets/images/avatar.png"


function Message(props) {
    return(
        <div className={style.message}><img src={avatar} alt='Avatar'/>{props.message}</div>
    )
}


export default Message