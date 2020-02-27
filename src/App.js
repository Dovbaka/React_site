import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom"
import DialoguesContainer from "./components/Dialogues/Messages/DialoguesContainer";

function App(props) {
    return (
        <div className="app_wrapper">
            <Header/>
            <NavBar />
            <div className="app_wrapper_content">
                <Route path='/dialogues' render={() => <DialoguesContainer/>}/>
                <Route path='/profile' render={() => <Profile />}/>
            </div>
        </div>
    );
}

export default App;
