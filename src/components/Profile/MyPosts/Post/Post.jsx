import React from 'react';
import style from './Post.module.css';

function Post(props) {
    return (
        <div className={style.item}>
            <div>
                <img src="https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x" alt="logo"/>
                <p className={style.text}>{props.userText}</p>
                <div className={style.likes}>
                    <img src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Heart-2-icon.png" alt={"avatar"}/>
                    &nbsp;Likes: {props.likeCount}
                </div>
            </div>

        </div>
    );
}

export default Post