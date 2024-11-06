// src/components/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'; // Import CSS for styling
import { useState , useEffect } from 'react';
import axios from 'axios';
import Server_URL from '../SERVER_URL';
import { Link } from 'react-router-dom';


const Sidebar = ({openModal}) => {

    const [projects, setProjects] = useState([]); // State to store project details

    

    useEffect(() => {
        const User_Email = localStorage.getItem('User_Email');

        axios.get(`${Server_URL}/getprojects/${User_Email}`)
            .then(function(response) {
                setProjects(response.data.projects); // Set the fetched projects in state
            })
            .catch(function(error) {
                console.error(error);
            });
    },[]);

    const projectCount = projects.length; // Count of projects derived from the state

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>My Projects</h2>
            </div>
            <div className="sidebar-content">
               
            {projectCount === 0 ? (
                    <button onClick={openModal} className="add-button">
                        <FontAwesomeIcon icon={faPlus} className="add-icon" />
                        Start New Project
                    </button>
                ) : (
                    

                    <div className="project-icons">
                    {projects.map((project, index) => (

                        
<Link style={{textDecoration : 'none'}}  to={`/project/${project._id}`} >


 <div key={index} className="project-icon" title={project.CP_Title}>
                            {project.CP_Cover_Photo ? (
                                <img src={project.CP_Cover_Photo} alt={project.CP_Title} className="icon-image" />
                            ) : (
                                <div className="icon-letter">
                                  
                                    {project.CP_Title ? project.CP_Title.charAt(0).toUpperCase() : 'U'}
                                </div>
                            )}
                        </div> 






</Link>



                    ))}
                </div>

                )}



            </div>
        </div>
    );
};

export default Sidebar;