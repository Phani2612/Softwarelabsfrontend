// ProfilePicture.js
import React from 'react';

const ProfilePicture = () => {
    const userPhoto = localStorage.getItem('User_Photo');

    return (
        <div className="profile-picture" style={{ textAlign: 'center', margin: '20px' }}>
            {userPhoto ? (
                <img 
                    src={userPhoto} 
                    alt="User Profile" 
                    style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
                />
            ) : (
                <p>No profile picture available</p>
            )}
        </div>
    );
};

export default ProfilePicture;
