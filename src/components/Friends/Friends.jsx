import React from 'react'
import style from './Friends.module.css'


function Friends(props) {

    let Friends = props.state.map(el => (
        <span>
                <img src={el.avatar} alt ="avatar"/>
                <div className={style.caption}>{el.name}</div>
        </span>));

    return (
        <div className={style.friends_online}>
        {Friends}
        </div>
    )
}

export default Friends