import React from 'react';
import style from './Post.module.css';
import avatar from "../../../../assets/images/avatar.png"

function Post(props) {
    return (
        <div className={style.item}>
            <div>
                <img src={avatar} alt="avatar"/>
                <p className={style.text}>{props.userText}</p>
                <div className={style.likes}>
                    <img src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Heart-2-icon.png" alt={"like"}/>
                    &nbsp;Likes: {props.likeCount}
                </div>
            </div>

        </div>
    );
}

export default Post