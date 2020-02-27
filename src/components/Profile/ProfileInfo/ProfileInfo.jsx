import React from 'react';
import style from './ProfileInfo.module.css';

function ProfileInfo(props) {
    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={props.avatar} alt="Avatar"/>
                <h2>{props.name + ' ' + props.surname}</h2>
                <p>Description</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default ProfileInfo