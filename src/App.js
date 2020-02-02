import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogues from "./components/Dialogues/Dialogues";
import {Route} from "react-router-dom"

function App(props) {
    return (
        <div className="app_wrapper">
            <Header/>
            <NavBar state={props.state.friendsBar}/>
            <div className="app_wrapper_content">
                <Route path='/dialogues' render={() => <Dialogues state={props.state.messagePage}/>}/>
                <Route path='/profile' render={() => <Profile state={props.state.profilePage}
                                                              dispatch={props.dispatch}/>}/>
            </div>
        </div>
    );
}

export default App;
