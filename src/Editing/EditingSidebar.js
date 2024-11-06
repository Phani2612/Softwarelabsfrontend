// SimpleSidebar.js
import React from 'react';
import './EditingSidebar.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import Server_URL from '../SERVER_URL';
import { Link } from 'react-router-dom';

const SimpleSidebar = () => {

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
    }, []);



    return (
        <div className="simple-sidebar">
            {/* Content for the sidebar can be added here in the future */}


<div>


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

                


</div>











       
    );
};

export default SimpleSidebar;
