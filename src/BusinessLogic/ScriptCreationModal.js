import React, { useState } from 'react';
import './ScriptCreationModal.css';
import { FaUpload, FaPaperPlane } from 'react-icons/fa';
import Server_URL from '../SERVER_URL';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';

const ScriptCreationModal = ({ isOpen, onClose, back }) => {


    const {OID} = useParams()

   

    const [inputData, setInputData] = useState({
        title: '',
        synopsis: '',
        genre: '',
        language: ''
    });

    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({}); // State for error messages


    if (!isOpen) return null; // Only render modal if isOpen is true

   

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: ''
        });
    };


      // Validate input fields
      const validateFields = () => {
        let newErrors = {};
        if (!inputData.title) newErrors.title = 'Title is required';
        if (!inputData.genre) newErrors.genre = 'Genre is required';
        if (!inputData.language) newErrors.language = 'Language is required';
        if(!inputData.synopsis) newErrors.synopsis = 'synopsis is required'
        return newErrors;
    };

    // Submit data to the backend
    const submitData = async () => {
        setLoading(true); // Set loading to true when starting the API call

        const validationErrors = validateFields();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false); // Stop loading if there are validation errors
            return;
        }



        const User_Email = localStorage.getItem('User_Email')

        const dataToSend = {
            ...inputData, // Spread operator to include all inputData properties
            User_Email, // Add User_Email to the data
            OID // Add OID to the data
        };


        try {
            const response = await fetch(`${Server_URL}/api/generation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        

          
    
            const result = await response.json();
            console.log('Success:', result);
    
            // Redirect to the editor page with OID
            window.location.href = `http://localhost:3000/editing/${result.OID}/${result.Screen_Play_ID}`;


        } catch (error) {
            console.error('Error submitting data:', error);
            // Handle error (e.g., show error message)
        } finally {
            setLoading(false); // Set loading to false after the API call completes
        }
    };
    

    return (
        <div className="scriptCreationModal-overlay">
            <div className="scriptCreationModal-box">
                <button className="scriptCreationModal-close-button" onClick={onClose}>&times;</button>
                <h2 className="scriptCreationModal-heading">Create a New Script</h2>

                <div className="scriptCreationModal-form">
                    <div className="scriptCreationModal-field">
                        <label htmlFor="title">Title:</label>
                        <input 
                            name='title' 
                            type="text" 
                            id="title" 
                            placeholder="Enter your script title" 
                            value={inputData.title} 
                            onChange={handleChange} 
                        />

{errors.title && <p className="error-message">{errors.title}</p>} {/* Display error message */}


                    </div>

                    <div className="scriptCreationModal-field">
                        <label htmlFor="synopsis">Synopsis:</label>
                        <textarea 
                            name='synopsis'  
                            id="synopsis" 
                            placeholder="Enter a brief synopsis..." 
                            value={inputData.synopsis} 
                            onChange={handleChange} 
                        />
                    </div>

                    {errors.synopsis && <p  id='synopsis-error' className="error-message">{errors.synopsis}</p>} {/* Display error message */}

                    <div className="scriptCreationModal-field">
                        <label htmlFor="genre">Genre:</label>
                        <select id="genre" name="genre" value={inputData.genre} onChange={handleChange}>
                            <option value="">Select a genre</option>
                            {/* Add other genres as needed */}
                            <option value="">Select a genre</option>
    <option value="action">Action</option>
    <option value="adventure">Adventure</option>
    <option value="animation">Animation</option>
    <option value="biography">Biography</option>
    <option value="comedy">Comedy</option>
    <option value="crime">Crime</option>
    <option value="documentary">Documentary</option>
    <option value="drama">Drama</option>
    <option value="family">Family</option>
    <option value="fantasy">Fantasy</option>
    <option value="history">History</option>
    <option value="horror">Horror</option>
    <option value="musical">Musical</option>
    <option value="mystery">Mystery</option>
    <option value="romance">Romance</option>
    <option value="sci-fi">Sci-Fi</option>
    <option value="short">Short</option>
    <option value="sport">Sport</option>
    <option value="superhero">Superhero</option>
    <option value="thriller">Thriller</option>
    <option value="war">War</option>
    <option value="western">Western</option>
    <option value="noir">Noir</option>
    <option value="parody">Parody</option>
    <option value="psychological">Psychological</option>
    <option value="epic">Epic</option>
    <option value="found footage">Found Footage</option>
    <option value="surreal">Surreal</option>
    <option value="avant-garde">Avant-Garde</option>
                        </select>
                        {errors.genre && <p className="error-message">{errors.genre}</p>} {/* Display error message */}
                    </div>

                    <div className="scriptCreationModal-field">
                        <label htmlFor="language">Language:</label>
                        <select id="language" name="language" value={inputData.language} onChange={handleChange}>
                            <option value="">Select a language</option>
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value='hindi'>Hindi</option>
                            <option value='telugu' >Telugu</option>
                            {/* Add more languages as needed */}
                        </select>

                        {errors.language && <p className="error-message">{errors.language}</p>} {/* Display error message */}


                    </div>



                    {/* <div className="scriptCreationModal-upload">
                        <label htmlFor="upload">Upload a Script:</label>
                        <small>When uploading a PDF file, please ensure that the screenplay is in the industry-standard format. Otherwise, it might be parsed incorrectly.</small>
                        <div className="scriptCreationModal-upload-button">
                            <FaUpload /> Upload
                        </div>
                    </div> */}



                </div>

                <div className="scriptCreationModal-footer">
                    <button className="scriptCreationModal-cancel-button" onClick={onClose}>Cancel</button>
                    <button className="scriptCreationModal-back-button" onClick={back}>← Back</button>
                    <button onClick={submitData} className="scriptCreationModal-submit-button">
                        <FaPaperPlane /> Submit
                    </button>
                </div>
                {loading && <Loader />} {/* Show loader when loading */}
            </div>
        </div>
    );
};

export default ScriptCreationModal;
