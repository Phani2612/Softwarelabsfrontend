// src/components/Welcome.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import './Welcome.css'; // Import CSS for styling

const Welcome = ({openModal}) => {
    return (
        <div className="welcome-container">
            <FontAwesomeIcon icon={faFolderOpen} className="welcome-icon" />
            <h1 className="welcome-title">Start Your First Project</h1>
            <p className="welcome-message">
                Every great story begins with a first scene.<br />
                Start your project and set the stage—your work in progress will appear here.
            </p>
            <button onClick={openModal}  className="start-project-button">Start New Project</button>
        </div>
    );
};

export default Welcome;
