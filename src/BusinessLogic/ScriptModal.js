// src/components/ScriptModal.js
import React from 'react';
import './ScriptModal.css';
import { useState } from 'react';

const ScriptModal = ({ isOpen, onClose , openJourneyModal }) => {


  


    if (!isOpen) return null; // Only render modal if isOpen is true


    
  




    return (
        <div className="scriptModal-overlay">
            <div className="scriptModal-box">
                <button className="scriptModal-close-button" onClick={onClose}>&times;</button>
                <h2 className="scriptModal-heading">Create a New Script</h2>
                
                <div className="scriptModal-options-container">
                    <label className="scriptModal-option">
                        <input  onClick={openJourneyModal} type="radio" name="scriptType" value="featureFilm" />
                        Feature Film
                    </label>
                    <label  className="scriptModal-option">
                        <input onClick={openJourneyModal}  type="radio" name="scriptType" value="episodicPilot" />
                        Episodic Pilot
                    </label>
                </div>

                <div className="scriptModal-footer">
                    <button className="scriptModal-cancel-button" onClick={onClose}>Cancel</button>
                    <button className="scriptModal-next-button">Next →</button>
                </div>
            </div>
        </div>
    );
};

export default ScriptModal;
