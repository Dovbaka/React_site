import React from "react";
import style from './SearchUser.module.css'
import Pagination from "../Pagination/Pagenation";
import User from "./User";

function SearchUser(props) {

    return <div className={style.container}>
        <Pagination totalUsersCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChange={props.onPageChange}/>
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