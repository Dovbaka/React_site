import React from 'react'
import style from '../Dialogues.module.css'


function Message(props) {
    return(
        <div className={style.message}><img src={"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x"} alt='Avatar'/>{props.message}</div>
    )
}


export default Message