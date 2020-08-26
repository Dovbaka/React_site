import {connect} from "react-redux";
import {loginThunkCreator, logoutThunkCreator} from "../../redux/authReducer";
import Login from "./Login";

let mapStateToProps = (state) => {
    return {
        isAuth: state.authentication.isAuth,
        userId: state.authentication.userId,
        captchaUrl: state.authentication.captchaUrl
    }
};

let mapDispatchToProps = (dispatch) => {
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