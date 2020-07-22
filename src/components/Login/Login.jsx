import React from "react";
import style from './Login.module.css';

function Login(props) {
    return <form action={"https://social-network.samuraijs.com/"} method={"post"}>
        <div className={style.container}>
            <label htmlFor={"uname"}><b>Username</b></label>
            <input type={"text"} placeholder={"Enter Username"} required/>

                <label htmlFor={"psw"}><b>Password</b></label>
                <input type={"password"} placeholder={"Enter Password"} name={"psw"} required/>

                    <button type={"submit"}>Login</button>
                    <label>
                        <input type={"checkbox"} name={"remember"}/> Remember me
                        <span className={style.psw}>Forgot <a >password?</a></span>
                    </label>
        </div>

        <div className={style.container} style={{backgroundColor: "#f1f1f1"}}>

        </div>


    </form>
}

export default Login;