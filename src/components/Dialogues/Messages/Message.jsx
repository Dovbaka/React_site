import React from 'react'
import style from '../Dialogues.module.css'


function Message(props) {
    return (
        <div className={style.message}><img src={props.sender.photos.small} alt='Avatar'/>
            <div>
                <h3>{props.sender.userName}</h3>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Message