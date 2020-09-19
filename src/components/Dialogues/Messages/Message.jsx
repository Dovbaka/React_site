import React from 'react'
import styles from './Message.module.css'

function Message(props) {
    debugger
    return (
        <div className={styles.bubbleWrapper}>
            <div className={props.senderId !== props.userId ? styles.recipientContainer : styles.senderContainer}>
                <div className={styles.bubble}>
                    <div className={styles.messageInfoBox}>
                        <h3>{props.senderName}</h3>
                        <h2>{props.time}</h2>
                    </div>
                    <div>
                        <p>{props.message}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*<h3>{props.senderName}</h3> <img src={props.senderId !== props.userId ? props.recipient.photos.small : avatar}
                                            alt='Avatar'/>*/

export default Message