import './App.css';
import { useState } from 'react';

import GuestPage from './GuestPage';
import UserPage from './UserPage';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (

        <div style={{ margin: "20px" }}>

            <h1>Ticket Booking App</h1>

            {

                isLoggedIn ?

                    <div>
                        <LogoutButton onClick={handleLogout} />
                        <UserPage />
                    </div>

                    :

                    <div>
                        <LoginButton onClick={handleLogin} />
                        <GuestPage />
                    </div>

            }

        </div>

    );

}

export default App;