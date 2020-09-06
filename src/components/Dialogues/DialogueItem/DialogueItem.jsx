import React from 'react';
import style from '../Dialogues.module.css';
import NavLinkWithDiv from "../../Common/NavLinkWithDiv/NavLinkWithDiv";

function DialogueItem(props) {
    return (
        <div onClick={()=>props.setMessages(props.path)}>
            <NavLinkWithDiv to={"/dialogues/" + props.path}
                            divStyle={style.dialogue}
                            divActiveStyle={style.active}>
                <div className={style.imgContainer}>
                    <img src={props.avatar} alt={"avatar"} className={style.avatar}/>
                </div>
                <div className={style.textContainer}>
                    <h3>{props.name}</h3>
                    <p>Last message</p>
                </div>
            </NavLinkWithDiv>
        </div>
    )
}

export default DialogueItem