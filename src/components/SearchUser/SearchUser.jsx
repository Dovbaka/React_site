import React from "react";
import style from './SearchUser.module.css'
import {NavLink} from "react-router-dom";

function SearchUser (props){

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 0; i < pagesCount; i++){
        pages.push(i+1);
    }

    return <div className={style.container}>
        <div className={style.pageNumbers}>
            {
                pages.map( p =>
                    <span className={props.currentPage === p && style.selectedPage }
                          onClick={() => {props.onPageChange(p)}}> {p} </span>
                )
            }
        </div>
        {
            props.users.map( el => <div key={el.id} className={style.item}>
                <div className={style.usersAvatar}>
                    <div>
                        <NavLink to={'/profile/' + el.id}>
                            <img src={el.photos.small == null ? "https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x" : el.photos.small} alt={"img"}/>
                        </NavLink>
                        </div>
                </div>
                <div className={style.users}>
                <span className={style.info}>
                    <div>{el.name}</div>
                    <div className={style.status}>Status: {el.status}</div>
                </span>
                    <span className={style.location}>
                    <div>From City</div>
                    <div>Country</div>
                </span>
                    <div className={style.sub}>
                        {el.followed ?
                            <button disabled={props.subInProgress.some(id => id === el.id)} onClick={() => {
                                props.unsubscribeUser(el.id);
                            }}> Unsubscribe </button>

                            : <button disabled={props.subInProgress.some(id => id === el.id)} onClick={() => {
                                props.subscribeUser(el.id);
                            }}> Subscribe </button> }
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default SearchUser;