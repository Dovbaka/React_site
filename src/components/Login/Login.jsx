import React from "react";
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../redux/utils/validators/validators";
import {Input} from "../Common/FormsControls/FormsControls";

const maxLength15 = maxLengthCreator(15);

function LoginForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div className={style.container}>
            <label htmlFor={"uname"}><b>Username</b></label>
            <Field component={Input} validate={[requiredField,maxLength15]} type={"text"} placeholder={"Enter Username"} name={"userName"} required/>

                <label htmlFor={"psw"}><b>Password</b></label>
                <Field component={Input} validate={[requiredField,maxLength15]} type={"password"} placeholder={"Enter Password"} name={"password"} required/>

                    <button type={"submit"}>Login</button>
                    <label>
                        <Field component={"input"} type={"checkbox"} name={"rememberMe"}/> Remember me
                        <span className={style.psw}>Forgot <a >password?</a></span>
                    </label>
        </div>

        <div className={style.container} style={{backgroundColor: "#f1f1f1"}}>

        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

function Login(props) {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <LoginReduxForm  onSubmit={onSubmit}/>
    </div>

}

export default Login;