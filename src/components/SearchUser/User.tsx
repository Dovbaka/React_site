import React from "react";
import style from './SearchUser.module.css'
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/avatar.png";

type PropsType = {
    user: any
    unsubscribeUser: (userId: number) => void
    subscribeUser: (userId: number) => void
    subInProgress: Array<number>
}

const User: React.FC<PropsType> = ({user, subInProgress, subscribeUser, unsubscribeUser}) => {

    return <div className={style.item}>
        <div className={style.usersAvatar}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small == null ? avatar : user.photos.small} alt={"img"}/>
                </NavLink>
            </div>
        </div>
        <div className={style.users}>
                <span className={style.info}>
                    <div>{user.name}</div>
                    <div className={style.status}>{user.status ? "Status: " + user.status : ""}</div>
                </span>
                <span className={style.location}>
                    <div>From City</div>
                    <div>Country</div>
                </span>
            <div className={style.sub}>
                {user.followed ?
                    <button disabled={subInProgress.some(id => id === user.id)} onClick={() => {
                        unsubscribeUser(user.id);
                    }}> Unsubscribe </button>

                    : <button disabled={subInProgress.some(id => id === user.id)} onClick={() => {
                        subscribeUser(user.id);
                    }}> Subscribe </button>}
            </div>
        </div>
    </div>
}

export default User;