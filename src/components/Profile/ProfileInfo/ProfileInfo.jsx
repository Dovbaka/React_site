import React from 'react';
import style from './ProfileInfo.module.css';

function ProfileInfo(props) {
    console.log(props);
    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={props.state.avatar} alt="Avatar"/>
                <h2>{props.state.name + ' ' + props.state.surname}</h2>
                <p>Description</p>
                <p>{props.state.description}</p>
            </div>
        </div>
    );
}

export default ProfileInfo