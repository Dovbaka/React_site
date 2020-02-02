import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";


function NavBar(props) {
    return (
        <nav className={style.app_nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogues" activeClassName={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <a>News</a>
            </div>
            <div className={style.item}>
                <a>Music</a>
            </div>
            <div className={style.item}>
                <a>Settings</a>
            </div>
            <div className={style.item + ' '  + style.friends}>
                <a>Friends</a>
                <Friends state={props.state.friend}/>
            </div>
        </nav>
    );
}

export default NavBar