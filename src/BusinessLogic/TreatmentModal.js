// TreatmentModal.js
import React, { useState } from 'react';
import './TreatmentModal.css'; // Import your CSS for styling
import Server_URL from '../SERVER_URL';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const TreatmentModal = ({ isOpen, onClose , back , openActOneModal}) => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [overview, setOverview] = useState('');
    const [characterSetup, setCharacterSetup] = useState('');

    const {OID} = useParams()


    const [errors, setErrors] = useState({
        genre: '',
        language: '',
        overview: '',
        characters: ''
    });


    if(!isOpen) return null

    const genres = ['Action', 'Drama', 'Comedy', 'Horror', 'Sci-Fi']; // Add more genres as needed
    const languages = ['English', 'Spanish', 'French', 'German', 'Chinese']; // Add more languages as needed



    const validateForm = () => {
        const newErrors = {
            genre: '',
            language: '',
            overview: '',
            characters:''
        };
        let isValid = true;

        if (!selectedGenre) {
            newErrors.genre = 'Genre is required.';
            isValid = false;
        }
        if (!selectedLanguage) {
            newErrors.language = 'Language is required.';
            isValid = false;
        }
        if (!overview) {
            newErrors.overview = 'Overview is required.';
            isValid = false;
        }

        if(!characterSetup){

            newErrors.characters = 'character is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };




    const handleSubmit = async () => {
        // Prepare the data to be sent to the server

        if (!validateForm()) {
            return; // Stop submission if validation fails
        }



        const User_Email = localStorage.getItem('User_Email')
        const treatmentData = {
            genre: selectedGenre,
            language: selectedLanguage,
            overview,
            characterSetup,
            OID,
            User_Email
        };
    
        try {
            // Send POST request to the backend
            const response = await axios.post(`${Server_URL}/store-treatment`, treatmentData);
            
            // Handle the response as needed (e.g., success message, redirection)

            localStorage.setItem('treatmentId', response.data.id);

            
            console.log('Treatment data submitted successfully:', response.data);

            return true; // Return true to indicate successful submission


        } catch (error) {
            console.error('Error submitting treatment data:', error);
            // Handle error (e.g., show an error message to the user)
        } finally {
            // Close the modal after submission
            onClose();
        }
    };


    const handleButtonClick = async () => {
        const isSubmitted = await handleSubmit(); // Call the second function
        if (isSubmitted) {
            await openActOneModal(); // Call the first function only if submission is successful
        }
    };


    return (
        <div className={`treatment-modal ${isOpen ? 'treatment-modal--open' : ''}`}>
            <div className="treatment-modal__content">
                <h2 className="treatment-modal__title">Create Treatment</h2>

                <label htmlFor="treatment-genre">Choose Genre:</label>
                <select 
                    id="treatment-genre" 
                    value={selectedGenre} 
                    onChange={(e) => setSelectedGenre(e.target.value)}
                >
                    <option value="">Select a Genre</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
 {errors.genre && <div style={{ color: 'red' }}>{errors.genre}</div>} {/* Error message */}


                <label htmlFor="treatment-language">Select Language:</label>
                <select 
                    id="treatment-language" 
                    value={selectedLanguage} 
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                    <option value="">Select a Language</option>
                    {languages.map((language) => (
                        <option key={language} value={language}>{language}</option>
                    ))}
                </select>

                {errors.language && <div style={{ color: 'red' }}>{errors.language}</div>} {/* Error message */}

                <label htmlFor="treatment-overview">Overview of Story:</label>
                <textarea 
                    id="treatment-overview" 
                    value={overview} 
                    onChange={(e) => setOverview(e.target.value)} 
                    placeholder="Write the overview of your story..."
                />

{errors.overview && <div style={{ color: 'red' }}>{errors.overview}</div>} {/* Error message */}

                <label htmlFor="treatment-characters">Character Setup (optional):</label>
                <textarea 
                    id="treatment-characters" 
                    value={characterSetup} 
                    onChange={(e) => setCharacterSetup(e.target.value)} 
                    placeholder="Describe the character setup..."
                />

{errors.characters && <div style={{ color: 'red' }}>{errors.characters}</div>} {/* Error message */}

                <div className="treatment-modal__button-container">
                    <button className="treatment-modal__button" onClick={back}>Previous</button>
                    <button className="treatment-modal__button"  onClick={handleButtonClick}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default TreatmentModal;
