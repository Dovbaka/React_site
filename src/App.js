import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import SearchUserContainer from "./components/SearchUser/SearchUserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {initializeAppThunkCreator} from "./redux/appReducer";
import store from "./redux/storeRedux";
import {compose} from "redux";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <div/>;
        }

        return (
            <div className="app_wrapper">
                <HeaderContainer/>
                <NavBarContainer/>
                <div className="app_wrapper_content">
                    <Route path='/dialogues' render={() => <DialoguesContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/search' render={() => <SearchUserContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        isAuth: state.authentication.isAuth,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        initializeApp: () => {
            dispatch(initializeAppThunkCreator())
        }
    }
};

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App);

const AppWithRouter = () => {
   return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default AppWithRouter;
