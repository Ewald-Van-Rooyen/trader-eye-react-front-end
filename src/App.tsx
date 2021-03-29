import React, {useState} from 'react';

import './App.css';
import Login from './components/login/Login';
import Dashboard from "./components/dashboard/Dashboard";

function App() {
    const [showLogin, setShowLogin] = useState(true);
    const [showDashboard, setShowDashboard] = useState(false);

    const showLoginClickCallback = ()=>{
        setShowLogin(true);
        setShowDashboard(false);
    };

    const showDashboardClackCallback = ()=>{
        setShowDashboard(true);
        setShowLogin(false);
    };

    return (
        <>
            {showLogin && <Login clickCallback={showDashboardClackCallback}/> }
            {showDashboard && <Dashboard clickCallback={showLoginClickCallback}/>}
        </>
    );
}

export default App;
