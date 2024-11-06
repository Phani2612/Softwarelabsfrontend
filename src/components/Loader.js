// Loader.js
import React from 'react';
import './Loader.css'; // Ensure this file exists and is styled

const Loader = () => (
    <div className="loader-overlay">
        <div className="loader"></div>
        <div className="loading-text">Loading...</div>
    </div>
);

export default Loader;
