import React, { useState } from 'react';
import axios from 'axios';
import './BreakdownModal.css'
import { useParams } from 'react-router-dom';
import Server_URL from '../SERVER_URL';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';

function BreakdownModal({ isOpen, onClose }) {

    const Navigate = useNavigate()

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');

  
    const {OID} = useParams()




    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        setLoading(true);
        setResult('');

        const formData = new FormData();
        formData.append('file', file);
        

        const User_Email = localStorage.getItem('User_Email');
   

    // Append User_Email and OID to the form data
    formData.append('User_Email', User_Email);
    formData.append('OID', OID);


        try {
            const response = await axios.post(`${Server_URL}/break_generate/document`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });


            Navigate(`/editingg/${OID}/${response.data.documentId}`)

            setResult(response.data.summary);
        } catch (error) {
            console.error('Error generating scene breakdown:', error);
            setResult('Failed to generate breakdown. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        isOpen && (
            <div className="breakdown-modal">
                <div className="breakdown-modal-content">
                    <h2>Upload a Document for Scene Breakdown</h2>
                    <input type="file" accept=".pdf" onChange={handleFileChange} />
                    <button onClick={handleUpload} disabled={loading}>Submit</button>
                    {loading ? <Loader/> : <p>{result}</p>}
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        )
    );
}

export default BreakdownModal;
