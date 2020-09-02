import React from 'react';
import style from './Post.module.css';
import avatar from "../../../../assets/images/avatar.png"

function Post(props) {



    return (
        <div className={style.item}>
            <div className={style.avatar}>
                <img src={props.profile.photos.small == null ? avatar : props.profile.photos.small} alt="Avatar"/>
            </div><div className={style.info}>
                <h3>{props.profile.fullName}</h3>
                <p>{props.date} in {props.time}</p>
            </div>
            <div className={style.text}>
                <p>{props.userText}</p>
            </div>
            <div className={style.likes}>
                <img src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Heart-2-icon.png" alt={"like"}/>
                &nbsp;Likes: {props.likeCount}
            </div>
        </div>
    );
}

export default Post