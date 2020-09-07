import React from 'react'
import style from './Message.module.css'
import avatar from '../../../assets/images/avatar.png'
import avatar2 from '../../../assets/images/avatar2.png'

function Message(props) {
    return (
        <div className={style.bubbleWrapper}>
            <div className={props.senderId !== props.userId ? style.recipientContainer : style.senderContainer}>
                <div className={style.bubble}>
                    <h3>{props.senderName}</h3>
                    <p>{props.message}</p>
                </div>
            </div>
        </div>
    )
}

/*<h3>{props.senderName}</h3> <img src={props.senderId !== props.userId ? props.recipient.photos.small : avatar}
                                            alt='Avatar'/>*/

export default Message