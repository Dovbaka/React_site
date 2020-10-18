import React from "react";
import style from './Login.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Input} from "../Common/FormsControls/FormsControls";
import {Redirect} from "react-router-dom";

const maxLength35 = maxLengthCreator(35);

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        <div className={style.container}>
            <div className={style.field}>
                <label htmlFor={"uname"}><b>Username</b></label>
                <Field component={Input} validate={[requiredField, maxLength35]} type={"text"}
                       placeholder={"Enter Username"} name={"email"} required/>
            </div>
            <div className={style.field}>
                <label htmlFor={"psw"}><b>Password</b></label>
                <Field component={Input} validate={[requiredField, maxLength35]} type={"password"}
                       placeholder={"Enter Password"} name={"password"} required/>
                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && <Field component={Input} validate={[requiredField]} type={"text"}
                           placeholder={"Enter captcha"} name={"captchaText"} required/>}
            </div>

            <button type={"submit"}>Login</button>
            {error && <div className={style.formSummeryTooltipPosition}>
                {error}
            </div>}
            <label>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/> Remember me
                <span className={style.psw}><a href={"https://social-network.samuraijs.com/signUp"}>
                    Don't have an account?</a></span>
            </label>
        </div>

        <div className={style.container} style={{backgroundColor: "#f1f1f1"}}>

        </div>
    </form>
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type PropsType = {
    isAuth: boolean,
    userId: number | null
    captchaUrl: string | null

    login: (email: string, password: string, rememberMe: boolean, captchaText: string) => void
    logout: () => void
}

type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captchaText: string
}

const Login: React.FC<PropsType> = (props) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captchaText);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile/" + props.userId}/>
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>

}

export default Login;