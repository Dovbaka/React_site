import React from "react";
import style from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import FriendsContainer from "../Friends/FriendsContainer";


function NavBar(props) {
    return (
        <nav className={style.app_nav}>
            <div className={style.item}>
                <NavLink to={(props.userId? ("/profile/" + props.userId) : "/login") } activeClassName={style.activeLink}> Profile </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogues" activeClassName={style.activeLink}> Messages </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/search" activeClassName={style.activeLink}> Search users </NavLink>
            </div>
            <div className={style.item}>
                News
            </div>
            <div className={style.item}>
                Music
            </div>
            <div className={style.item}>
                Settings
            </div>
            <div className={style.item + ' '  + style.friends}>
                Friends <span className={style.online}>online</span>
                <FriendsContainer />
            </div>
        </nav>
    );
}

export default NavBar