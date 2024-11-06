import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navigationbar.css';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

function Navigationbar({ openModal }) {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const User_Photo = localStorage.getItem('User_Photo');

    const auth = getAuth();

    const toggleDropdowns = () => {

        
        setDropdownVisible(prevState => !prevState);
    };

    const handleLogout = () => {
        // Firebase sign-out for both Google and email logins
        signOut(auth)
            .then(() => {
                console.log("User logged out from Firebase");
    
                // Clear user-specific local storage data
                localStorage.removeItem('User_Email');
                localStorage.removeItem('User_Photo');
                localStorage.clear();
    
                // Redirect to login page
                window.location.pathname = '/login';
            })
            .catch((error) => {
                console.error("Error logging out: ", error);
            });
    };

    return (
        <div>
            <nav className="navigationbar">
                <div className="navigationbar-left">
                    <a href="/dashboard" className="navigationbar-link">
                        <FontAwesomeIcon icon={faHome} className="navigationbar-icon" />
                        Dashboard
                    </a>
                </div>
                <div className="navigationbar-right">
                    <button onClick={openModal} className="create-project-button">Start new Project</button>

                    <div className="profile-container"   onClick={function()
                                    {
                                         toggleDropdowns()
                                    }
                                } >
                        <span   >
                            {User_Photo ? (
                                <img src={User_Photo} alt="User Profile" className="profile-photo" />
                            ) : (
                                <FontAwesomeIcon icon={faUser} className="navigationbar-icon" />
                            )}
                        </span>

                        {isDropdownVisible && (
                            <div className="dropdowns-menu">
                                
                                <button className="dropdowns-item" onClick={handleLogout}>Log Out</button>
                            </div>
                        )}

                       

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigationbar;
