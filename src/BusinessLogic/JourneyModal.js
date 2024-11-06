// src/components/JourneyModal.js
import React from 'react';
import './JourneyModal.css';
import { FaCamera, FaFilm } from 'react-icons/fa';

const JourneyModal = ({ isOpen, onClose , back , openScriptcreationModal , openTreatmentModal }) => {
    if (!isOpen) return null; // Only render modal if isOpen is true

    return (
        <div className="journeyModal-overlay">
            <div className="journeyModal-box">
                <button className="journeyModal-close-button" onClick={onClose}>&times;</button>
                <h2 className="journeyModal-heading">Create a New Script</h2>
                <p className="journeyModal-subheading">Select how you want to start your journey</p>
                
                <div className="journeyModal-options-container">
                    <div  onClick={openScriptcreationModal}  className="journeyModal-option">
                        <FaCamera className="journeyModal-icon" />
                        <div className="journeyModal-content">
                            <h3>From scratch or upload your script</h3>
                            <p>Fill in the title, synopsis, and genre to start your journey, or upload a PDF or Final Draft file</p>
                        </div>
                    </div>
                    
                    <div onClick={openTreatmentModal}  className="journeyModal-option">
                        <FaFilm className="journeyModal-icon" />
                        <div className="journeyModal-content">
                            <h3>Treatment</h3>
                            <p>Turn your treatment into your screenplay</p>
                        </div>
                    </div>
                </div>

                <div className="journeyModal-footer">
                    <button className="journeyModal-back-button" onClick={back}>← Back</button>
                    <button className="journeyModal-cancel-button" onClick={onClose}>Cancel</button>
                    <button className="journeyModal-next-button">Submit →</button>
                </div>
            </div>
        </div>
    );
};

export default JourneyModal;
