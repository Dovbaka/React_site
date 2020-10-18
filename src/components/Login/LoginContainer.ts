import {connect} from "react-redux";
import {loginThunkCreator, logoutThunkCreator} from "../../redux/authReducer";
import Login from "./Login";
import {AppStateType} from "../../redux/storeRedux";

type MapStateToPropsType = {
    isAuth: boolean,
    userId: number | null
    captchaUrl: string | null
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captchaText: string) => void
    logout: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.authentication.isAuth,
        userId: state.authentication.userId,
        captchaUrl: state.authentication.captchaUrl
    }
};

let mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        login: (email, password, rememberMe, captchaText) => {
            dispatch(loginThunkCreator(email, password, rememberMe, captchaText))
        },
        logout: () => {
            dispatch(logoutThunkCreator())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);