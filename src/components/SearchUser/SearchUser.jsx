import React from "react";
import style from './SearchUser.module.css'
import User from "./User";

function SearchUser(props) {

    return <div className={style.container}>
        {
            props.users.map(el =>
                <User key={el.id} user={el}
                      subInProgress={props.subInProgress}
                      subscribeUser={props.subscribeUser}
                      unsubscribeUser={props.unsubscribeUser}/>)
        }
    </div>
}

export default SearchUser;