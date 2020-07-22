import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import SearchUserContainer from "./components/SearchUser/SearchUserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import Login from "./components/Login/Login";

function App() {
    return (
        <div className="app_wrapper">
            <HeaderContainer/>
            <NavBarContainer />
            <div className="app_wrapper_content">
                <Route path='/dialogues' render={() => <DialoguesContainer/>}/>
                <Route path='/profile/:userId' render={() => <ProfileContainer />}/>
                <Route path='/search' render={() => <SearchUserContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;
