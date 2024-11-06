// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import Navigationbar from './Navigationbar';
import Sidebar from './Sidebar';
import Welcome from './Welcome';
import './Dashboard.css'; // Import your custom CSS for the dashboard
import ProjectModal from './ProjectModal';
import axios from 'axios';
import Server_URL from '../SERVER_URL';
import { Link } from 'react-router-dom';
import ProfilePicture from '../components/ProfilePicture';

function Dashboard() {
    const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility
    const [projects, setProjects] = useState([]); // State to store project details

    const User_Photo = localStorage.getItem('User_Photo');

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

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
        <div className="dashboard-container">
            <Navigationbar openModal={openModal} />
            <Sidebar openModal={openModal} />
            <div className="dashboard-content"> {/* Content area for Welcome and other components */}
                

            {projectCount === 0 ? (
                    <Welcome openModal={openModal} />
                ) : (
                    <div className="project-summary">
                        {projects.map((project, index) => (
                            

<Link style={{textDecoration : 'none'}} to={`/project/${project._id}`} >


<div key={index} className="project-card">
                                <div className="project-title">
                                    <img src="/images/cinema.png" alt="Movie Clap Logo" />
                                    <h2  style={{color : 'black'}} >{project.CP_Type}</h2> {/* Assuming projects have a title */}

                                </div>

                               
                                <h4 id='project-summary-h4' >{project.CP_Title}</h4>

                                <div className="project-synopsis">
                                    <p  style={{color : 'black'}} >{project.CP_Description.slice(0, 100)}...</p> {/* Assuming projects have a synopsis */}
                                </div>
                              
                                <div key={index} className="project-icon" title={project.CP_Title}>
                            {project.CP_Cover_Photo ? (
                                <img src={project.CP_Cover_Photo} alt={project.CP_Title} className="icon-image" />
                            ) : (
                                <div className="icon-letter">
                                  
                                    {project.CP_Title ? project.CP_Title.charAt(0).toUpperCase() : 'U'}
                                </div>
                            )}
                        </div> 



                            </div>



</Link>


                        ))}
                    </div>
                )}


                <ProjectModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </div>
    );
}

export default Dashboard;
