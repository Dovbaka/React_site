import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={style.app_header}>
            <div className={style.loginBlock}></div>
            <img src="https://www.pngkey.com/png/full/342-3429274_horde-technology-react-js-project.png"
                className={style.App_logo} alt="logo" />
            <div className={style.loginBlock}>
                { props.isAuth ? <div className={style.auth}> {props.login} <p onClick={props.logout}> Log out</p></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header