import React from 'react'
import style from '../Dialogues.module.css'
import {NavLink} from "react-router-dom";

function DialogueItem(props){
    return(
        <div className={style.dialogue + ' '  + style.active}>
            <NavLink to={"/dialogues/" + props.path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogueItem