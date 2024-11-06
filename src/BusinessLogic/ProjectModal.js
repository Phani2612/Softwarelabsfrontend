// src/components/ProjectModal.js
import React, { useState } from 'react';
import './ProjectModal.css'; // Import your CSS for the modal
import axios from 'axios';
import Server_URL from '../SERVER_URL';
import { useNavigate } from 'react-router-dom';


function ProjectModal({ isOpen, onClose }) {

    const Navigate = useNavigate()


    const [title, setTitle] = useState('');
    const [type, setType] = useState('Feature Film');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Reset messages
        setError('');
        setSuccess('');
    
        const User_Email = localStorage.getItem('User_Email');
    
        try {
            const response = await axios.post(`${Server_URL}/create-project`, {
                title,
                type,
                description,
                User_Email
            });
    
            console.log('Project created successfully:', response.data);
            setSuccess('Project created successfully!');
    
            // Extract projectId from the response
            const projectId = response.data.projectId;
    
            // Redirect to the project page for the created project
            // window.location.href = `http://localhost:3000/project/${projectId}`;

            Navigate(`/project/${projectId}`)
    
            // Optionally close the modal
            onClose();
        } catch (error) {
            console.error('Error creating project:', error);
            setError('Failed to create project. Please try again.');
        }
    };

    if (!isOpen) return null; // Do not render the modal if it's not open

    return (
        <div className="ProjectModal-overlay">
            <div className="ProjectModal-content">
                <button className="ProjectModal-close" onClick={onClose}>&times;</button>
                <h2>Start a New Project</h2>
                <form onSubmit={handleSubmit}>
                    <div className="ProjectModal-form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="ProjectModal-form-group">
                        <label>Type</label>
                        <select value={type} onChange={(e) => setType(e.target.value)} required>
                            <option value="Feature Film">Feature Film</option>
                            <option value="TV Show">TV Show</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="ProjectModal-form-group">
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            
                            required
                        />
                    </div>
                    <div className="ProjectModal-buttons">
                        <button type="button" className="ProjectModal-close-button" onClick={onClose}>Close</button>
                        <button type="submit" className="ProjectModal-create-button">Create Project</button>
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}


                </form>
            </div>
        </div>
    );
}

export default ProjectModal;
