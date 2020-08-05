import React from 'react'
import style from './Friends.module.css'


function Friends(props) {

    let Friend = props.base.map(el => (
        <span key={el.id}>
                <img src={el.avatar} alt ="avatar"/>
                <div className={style.caption}>{el.name}</div>
        </span>));

    return (
        <div className={style.friends_online}>
        {Friend}
        </div>
    )
}

export default Friends