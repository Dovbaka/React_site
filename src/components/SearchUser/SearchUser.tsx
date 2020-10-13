import React from "react";
import style from './SearchUser.module.css'
import User from "./User";
import {UsersType} from "../../types/types";

type PropsType = {
    users: Array<UsersType>
    unsubscribeUser: (userId: number) => void
    subscribeUser: (userId: number) => void
    subscribeInProgress: (subInProgress: boolean, userId: number) => void
    subInProgress: Array<number>
}


const SearchUser: React.FC<PropsType> = ({users, unsubscribeUser,
                                         subscribeUser, subInProgress}) => {

    return <div className={style.container}>
        {
            users.map(el =>
                <User key={el.id} user={el}
                      subInProgress={subInProgress}
                      subscribeUser={subscribeUser}
                      unsubscribeUser={unsubscribeUser}/>)
        }
    </div>
}

export default SearchUser;