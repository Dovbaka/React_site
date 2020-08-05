import React from "react";
import style from './SearchUser.module.css'
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/avatar.png";

function User(props) {

    return <div className={style.item}>
        <div className={style.usersAvatar}>
            <div>
                <NavLink to={'/profile/' + props.user.id}>
                    <img src={props.user.photos.small == null ? avatar : props.user.photos.small} alt={"img"}/>
                </NavLink>
            </div>
        </div>
        <div className={style.users}>
                <span className={style.info}>
                    <div>{props.user.name}</div>
                    <div className={style.status}>{props.user.status ? "Status: " + props.user.status : ""}</div>
                </span>
                <span className={style.location}>
                    <div>From City</div>
                    <div>Country</div>
                </span>
            <div className={style.sub}>
                {props.user.followed ?
                    <button disabled={props.subInProgress.some(id => id === props.user.id)} onClick={() => {
                        props.unsubscribeUser(props.user.id);
                    }}> Unsubscribe </button>

                    : <button disabled={props.subInProgress.some(id => id === props.user.id)} onClick={() => {
                        props.subscribeUser(props.user.id);
                    }}> Subscribe </button>}
            </div>
        </div>
    </div>
}

export default User;