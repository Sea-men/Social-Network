import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' component={Profile} />
                    <Route path='/Dialogs' component={Dialogs} />
                    <Route path='/News' component={News} />
                    <Route path='/Music' component={Music} />
                    <Route path='/Settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
        )
}

export default App;