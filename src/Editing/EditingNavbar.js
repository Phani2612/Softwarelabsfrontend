// EditorDashboard.js
import React from 'react';
import './EditingNavbar.css'; // Make sure to create this CSS file
import { Link } from 'react-router-dom';

const EditingNavbar = ({Title}) => {
    return (
        <div className="editor-dashboard">
          
            <header className="editor-header">

            
{/* <h6 className='editorheader6' >{Title}</h6> */}


                <div className="editor-links">
                   <Link style={{textDecoration:'none'}}  to='/dashboard' > <span className="editor-nav-link">Dashboard</span></Link>
                    
                    <span className="editor-nav-link">Edit</span>
                    <span className="editor-nav-link">Tools</span>
                    <span className="editor-nav-link">Share</span>
                    <span className="editor-nav-link">Help</span>
                </div>
                <div className="editor-profile-section">
                    <div className="editor-profile">
                        <img
                            src="https://via.placeholder.com/40" // Placeholder profile image
                            alt="User Profile"
                            className="editor-profile-image"
                        />
                        <span className="editor-profile-name">User Name</span>
                    </div>
                </div>
            </header>
            
        </div>
    );
};

export default EditingNavbar;
