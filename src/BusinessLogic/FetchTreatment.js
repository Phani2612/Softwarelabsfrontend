import React from 'react'
import axios from 'axios'
import './FetchScript.css'
import Server_URL from '../SERVER_URL';

import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

import { useParams } from 'react-router-dom';

import { useState , useEffect } from 'react';

function FetchTreatment() {

    const [treatmentData , setTreatmentData] = useState([])


    const [activeDropdown, setActiveDropdown] = useState(null); // State to manage active dropdown



    const toggleDropdown = (id) => {
        setActiveDropdown(activeDropdown === id ? null : id); // Toggle the dropdown for the clicked script
    };
    
    const {OID} = useParams()

    const displayTreatmentData = async () => {
        const User_Email = localStorage.getItem('User_Email')
        try {
            const response = await axios.get(`${Server_URL}/gettreatment/${User_Email}/${OID}`); // Assuming you have this endpoint

            console.log(response)
            setTreatmentData(response.data);
        } catch (error) {
            console.error('Error fetching project data:', error);
            setTreatmentData([])
        }
    };

    
    

    useEffect(() => {
     

       
        displayTreatmentData();

    }, [OID]); // Fetch data whenever OID changes
    






    const handleUpdateTitle = async (script) => {
        const { value: updatedTitle } = await Swal.fire({
            title: 'Update Script Title',
            input: 'text',
            inputLabel: 'New Title',
            inputValue: script.T_Title, // Pre-fill with current title
            showCancelButton: true,
            confirmButtonText: 'Update',
            cancelButtonText: 'Cancel',
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!';
                }
            }
        });
    
        if (updatedTitle) {
            try {
                const response = await axios.put(`${Server_URL}/updatetreatment/${script._id}`, { newTitle: updatedTitle });
                console.log('Title updated:', response.data);
    
                setTreatmentData((prevData) =>
                    prevData.map((item) =>
                        item._id === script._id ? { ...item, T_Title: updatedTitle } : item
                    )
                );
    
                Swal.fire(
                    'Updated!',
                    'The title has been updated successfully.',
                    'success'
                );
    
            } catch (error) {
                console.error('Error updating title:', error);
                Swal.fire(
                    'Error!',
                    'There was a problem updating the title.',
                    'error'
                );
            }
        }
    };



    
    const handleDeleteScript = async (script) => {
        const { value: confirmed } = await Swal.fire({
            title: 'Are you sure?',
            text: `You are about to delete the script: ${script.T_Title}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        });
    
        if (confirmed) {
            try {
                const response = await axios.delete(`${Server_URL}/deletetreatment/${script._id}`);
                Swal.fire(
                    'Deleted!',
                    'Your script has been deleted.',
                    'success'
                );
                displayTreatmentData(); // Refetch the data to update the UI
            } catch (error) {
                Swal.fire(
                    'Error!',
                    'There was a problem deleting your script.',
                    'error'
                );
                console.error('Error deleting script:', error);
            }
        }
    };







  return (
    <div>


<h2 id='particular-h2'  >Treatment:</h2>

<div className="script-display">
                    
    



                {treatmentData.map(script => (
    <div key={script._id} className="script-item">
        <div className="script-options">
            <div className="three-dots" onClick={() => toggleDropdown(script._id)}>
                &#x02299; {/* Unicode for three dots */}
            </div>
            <div className={`dropdown-menu ${activeDropdown === script._id ? 'show' : ''}`}>
                <div className="dropdown-item" onClick={() => handleUpdateTitle(script)}>Edit</div>
                <div className="dropdown-item" onClick={() => handleDeleteScript(script)}>Delete</div>
            </div>
        </div>

       
            <h3>{script.T_Title}</h3>
        

        <Link to={`/editinggg/${OID}/${script._id}`}>
            <div className="script-meta">
                <span>Genre: {script.T_Genre}</span>
                <span>Language: {script.T_Language}</span>
            </div>
        </Link>
    </div>
))}




    
</div>


    </div>
  )
}

export default FetchTreatment