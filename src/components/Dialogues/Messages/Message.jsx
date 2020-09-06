import React from 'react'
import style from '../Dialogues.module.css'
import avatar from '../../../assets/images/avatar.png'
import avatar2 from '../../../assets/images/avatar2.png'

function Message(props) {
    return (
        <div className={style.message}><img src={props.senderId !== props.userId ? avatar2 : avatar}
                                            alt='Avatar'/>
            <div>
                <h3>{props.senderName}</h3>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Message