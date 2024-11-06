import React from 'react';
import { FaFilm, FaClipboardList, FaCalendarAlt, FaImage, FaChartLine, FaExclamationTriangle, FaFileAlt } from 'react-icons/fa'; // Importing icons from react-icons
import './Tools.css'; // Assuming you have a CSS file for styling
import Swal from 'sweetalert2'; // Import SweetAlert2

const Tools = ({ openScriptModal , openBreakdownModal}) => {

    const showLockedAlert = () => {
        Swal.fire({
            title: 'Feature Locked',
            text: 'The feature is locked right now, it will be unlocked in the future.',
            icon: 'warning',
            confirmButtonText: 'OK',
        });
    };



    return (
        <div className="tools-container">
            <div className="movie-reel">
                <FaFilm size={100} color="#2196F3" /> {/* Blue movie reel icon */}
            </div>
            <div className="button-container">
                <button className="primary-button"  onClick={openScriptModal} >
                    <FaClipboardList className="button-icon" /> Screenplay
                </button>
                <button onClick={openBreakdownModal} className="primary-button">
                    <FaChartLine className="button-icon" /> Breakdown
                </button>
                <button className="primary-button"  onClick={showLockedAlert}>
                    <FaCalendarAlt className="button-icon" /> Scheduling
                </button>
                <button className="primary-button"  onClick={showLockedAlert}>
                    <FaImage className="button-icon" /> Storyboard
                </button>
                <button className="primary-button"  onClick={showLockedAlert}>
                    <FaFileAlt className="button-icon" /> Deck
                </button>
                <button className="primary-button"  onClick={showLockedAlert}>
                    <FaExclamationTriangle className="button-icon" /> Plothole
                </button>
                <button className="primary-button" onClick={showLockedAlert}>
                    <FaClipboardList className="button-icon" /> Script Coverage
                </button>
            </div>
        </div>
    );
};

export default Tools;
