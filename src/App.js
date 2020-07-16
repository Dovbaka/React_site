import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import {Route} from "react-router-dom"
import DialoguesContainer from "./components/Dialogues/Messages/DialoguesContainer";
import SearchUserContainer from "./components/SearchUser/SearchUserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
    return (
        <div className="app_wrapper">
            <Header/>
            <NavBar />
            <div className="app_wrapper_content">
                <Route path='/dialogues' render={() => <DialoguesContainer/>}/>
                <Route path='/profile/:userId' render={() => <ProfileContainer />}/>
                <Route path='/search' render={() => <SearchUserContainer/>}/>
            </div>
        </div>
    );
}

export default App;
