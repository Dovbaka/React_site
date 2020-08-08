import React from 'react';
import style from './Post.module.css';
import avatar from "../../../../assets/images/avatar.png"

function Post(props) {
    return (
        <div className={style.item}>
            <div className={style.avatar}>
                <img src={avatar} alt="avatar"/>
            </div>
            <div className={style.info}>
                <h3>Name</h3>
                <p>Date</p>
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