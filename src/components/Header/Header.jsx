import React from 'react';
import style from './Header.module.css';

function Header() {
    return (
        <header className={style.app_header}>
            <img src="https://www.pngkey.com/png/full/342-3429274_horde-technology-react-js-project.png"
                className={style.App_logo} alt="logo" />
        </header>
    );
}

export default Header