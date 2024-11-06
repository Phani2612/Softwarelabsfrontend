import React from 'react';
import './ActOneModal.css'; // Import your CSS styles
import Server_URL from '../SERVER_URL';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ActOneModal = ({ isOpen, onClose }) => {


    const Navigate = useNavigate()
    const [actOneText, setActOneText] = useState(''); 
    const [loading, setLoading] = useState(false); // State to manage loading status
    const [error, setError] = useState(null); // State to manage error messages

    const { OID } = useParams();


    

    const handleTextChange = (event) => {
        setActOneText(event.target.value); // Update state with the current textarea value
    };

    const HandleSubmitdata = async () => {
        setLoading(true); // Start loading
        setError(null); // Reset any previous error
        const TID = localStorage.getItem('treatmentId');
        

        try {
            const response = await axios.post(`${Server_URL}/treatment/generation`, { OID, actOneText, TID });
            console.log('Generated data:', response.data); // Log the response

            // Redirect to the editing page with the OID and generated screenplay ID
            // window.location.href = `http://localhost:3000/editinggg/${OID}/${response.data.Treatment_ID}`;

            Navigate(`/editinggg/${OID}/${response.data.Treatment_ID}`)
        } catch (error) {
            console.error('Error generating treatment:', error);
            setError('Failed to generate treatment. Please try again.'); // Set error message
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className={`actone-modal ${isOpen ? 'actone-modal--open' : ''}`}>
            <div className="actone-modal__content">

            <button className="scriptModal-close-button" onClick={onClose}>&times;</button>

            
                <h2 className="actone-modal__title">Act One Setup</h2>
                <div className="actone-modal__description">
                    <p>
                        Set up your Act 1 treatment. Briefly introduce your opening,
                        setting, and theme. Once you're done with that, click 
                        'Generate' and NolanAI will provide you with a draft of Act 1.
                    </p>
                </div>
                
                {loading ? ( // Conditionally render the loader
                    <Loader />
                ) : (
                    <>
                        <textarea
                            className="actone-modal__textarea"
                            placeholder="Enter your Act 1 treatment here..."
                            value={actOneText} // Set the value of the textarea to the state variable
                            onChange={handleTextChange} // Call the handler on change
                            disabled={loading} // Disable while loading
                        />
                        <div className="actone-modal__button-container">
                            <button className="actone-modal__button" onClick={HandleSubmitdata} disabled={loading}>
                                Generate
                            </button>
                        </div>
                        {error && <p className="error">{error}</p>} {/* Display error if exists */}
                    </>
                )}
            </div>
        </div>
    );
};

export default ActOneModal;