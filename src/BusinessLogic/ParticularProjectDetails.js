// import React, { useState , useEffect } from 'react';
// import { FaBolt, FaUpload, FaImage, FaEdit, FaTrash } from 'react-icons/fa'; // Importing icons from react-icons
// import './ParticularProjectDetails.css';
// import axios from 'axios';
// import Loader from '../components/Loader';
// import Server_URL from '../SERVER_URL';
// import Swal from 'sweetalert2'; // Import SweetAlert2
// import { useNavigate, useParams } from 'react-router-dom';
// import { useRef } from 'react';

// function ParticularProjectDetails({ projectData, onUpdate, onDelete , onUpdateImage}) {

//     const { CP_Title = '', CP_Description = '', CP_Type = '' } = projectData || {};
   
//     const fileInputRef = useRef();

//     const handleButtonClick = () => {
//         fileInputRef.current.click(); // Open the file dialog
//     };


//     const {OID} = useParams()
    

//     const navigate = useNavigate();


//     const showLockedAlert = () => {
//         Swal.fire({
//             title: 'Feature Locked',
//             text: 'The feature is locked right now, it will be unlocked in the future.',
//             icon: 'warning',
//             confirmButtonText: 'OK',
//         });
//     };




//   const [imageSrc, setImageSrc] = useState(null); // State to store the generated image source
//   const [isLoading, setIsLoading] = useState(false);
//     const [showOptions, setShowOptions] = useState(false);
//     const [isEditing, setIsEditing] = useState(false);
//     const [editedTitle, setEditedTitle] = useState(CP_Title);
//     const [editedType, setEditedType] = useState(CP_Type);
//     const [editedDescription, setEditedDescription] = useState(CP_Description);

//     const [coverImage, setCoverImage] = useState(null);
//     const [selectedFile, setSelectedFile] = useState(null);

 

//     useEffect(() => {
//         // Update local states if projectData changes
//         setEditedTitle(CP_Title);
//         setEditedType(CP_Type);
//         setEditedDescription(CP_Description);
//     }, [CP_Title, CP_Type, CP_Description]);

//     if (!projectData) {
//         return <div>Loading...</div>; // Handle loading state
//     }

// // async function GenerateAIImage()
// // {
// //     setIsLoading(true)
// //     try {
// //         const response = await axios.get(`${Server_URL}/image`, { responseType: 'arraybuffer' });

// //         if (response.status === 200) {
// //             // Create a blob from the response data and generate a URL
// //             const blob = new Blob([response.data], { type: 'image/webp' });
// //             const url = URL.createObjectURL(blob);

// //             // Update the image source state
// //             setImageSrc(url);

// //             Swal.fire({
// //                 title: 'Success!',
// //                 text: 'Image generated successfully',
// //                 icon: 'success',
// //                 confirmButtonText: 'OK'
// //             });

           
// //         } else {
// //             console.error('Error generating image:', response.statusText);

// //             console.log(response)
            
// //             Swal.fire({
// //                 title: 'Error!',
// //                 text: response.statusText,
// //                 icon: 'error',
// //                 confirmButtonText: 'Try Again'
// //             });
// //         }
// //     } catch (error) {
// //         console.error('Error generating image:', error);
// //         Swal.fire({
// //             title: 'Error!',
// //             text: "Unknown error occured",
// //             icon: 'error',
// //             confirmButtonText: 'Try Again'
// //         });
      

// //     }
// //     finally {
// //         setIsLoading(false); // Set loading state to false after the request is complete
// //     }
// // }






// const handleImageUpload = async (event) => {
//     const file = event.target.files[0];



//     console.log('File' , file)

//     if (file) {
//         // Preview the image on the frontend
//         setSelectedFile(URL.createObjectURL(file));

//         // Prepare the file to be sent to backend
//         const formData = new FormData();
//         formData.append('coverPhoto', file);
//         formData.append('OID', OID); // Append the OID

        

//         try {
//             const response = await axios.post(`${Server_URL}/upload-cover-photo`, formData,  {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             const imageUrl = response.data.coverImage;

//             console.log("ImageURL" , imageUrl)

//             Swal.fire({
//                 title: 'Success!',
//                 text: response.data.message,
//                 icon: 'success',
//                 confirmButtonText: 'OK'
//             });


//             onUpdateImage(imageUrl)

//             setImageSrc(imageUrl)
            
//         } catch (error) {
//             console.error('Error uploading image:', error);
//             Swal.fire({
//                 title: 'Success!',
//                 text: 'Image upload failed',
//                 icon: 'success',
//                 confirmButtonText: 'OK'
//             });
//         }
//     }
// };



//     const handleEditClick = () => {
//         setIsEditing(true);
//         setShowOptions(false); // Hide options when editing
//     };

//     const handleSave = async () => {
   
//         setIsLoading(true)

//         const updatedData = {
//             CP_Title: editedTitle,
//             CP_Type: editedType,
//             CP_Description: editedDescription,
//         };

//         try {
//             await axios.put(`${Server_URL}/Updateproject/${projectData._id}`, updatedData); // Replace with your actual endpoint
//             // onUpdate(updatedData); // Call the update function passed from the parent

//             Swal.fire({
//                 icon: 'success',
//                 title: 'Success!',
//                 text: 'Your details updated successfully!',
//                 confirmButtonText: 'OK',
//             });

//             setIsEditing(false); // Exit editing mode

//             onUpdate({ ...projectData, ...updatedData });


//         } catch (error) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'There was an error updating your details.',
//                 confirmButtonText: 'OK',
//             });
//             console.error('Error updating project:', error);
//         }
//         finally {
//             setIsLoading(false); // Set loading state to false after the request is complete
//         }
//     };

//     const handleDeleteClick = async () => {
//         // Logic to handle delete action (e.g., confirm deletion and call API)
//         setIsLoading(true)

//         try {
//             await axios.delete(`${Server_URL}/deleteproject/${projectData._id}`); // Replace with your actual endpoint
//             // onUpdate(updatedData); // Call the update function passed from the parent

//             Swal.fire({
//                 icon: 'success',
//                 title: 'Success!',
//                 text: 'Your details deleted successfully!',
//                 confirmButtonText: 'OK',
//             });

        
//             onDelete()
//             navigate('/dashboard'); 



//         } catch (error) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'There was an error deleting your details.',
//                 confirmButtonText: 'OK',
//             });
//             console.error('Error updating project:', error);
//         }
//         finally {
//             setIsLoading(false); // Set loading state to false after the request is complete
//         }
//     };







//     return (
//         <div className='particular-project-details-container'>
//             {isLoading && <Loader />} {/* Show Loader if loading */}

//             <div className='Project-cover'>
//                 <div className="cover-image-placeholder">
//                     {/* Placeholder for cover image */}
//                     {imageSrc ? (
//                         <img src={imageSrc} alt="Generated AI" style={{ width: '100%', height: 'auto' }} />
//                     ) : (
//                         <FaImage size={100} color="#ccc" />
//                     )}
//                 </div>

//                 <div className="button-container">
//                     <button onClick={showLockedAlert} className="generate-button">
//                         <FaBolt style={{ marginRight: '8px' }} /> Generate Cover
//                     </button>
//                     <button onClick={handleButtonClick} type='file'   className="upload-button">
//                         <FaUpload style={{ marginRight: '8px' }} /> Upload Cover
//                     </button>

//                     <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleImageUpload}
//                 style={{ display: 'none' }} // Hide the actual file input
//                 accept="image/*" // Optional: Restrict to image files
//             />



//                 </div>
//             </div>

//             <div id='details-particular-project'>
//                 <h3>
//                     Title: {isEditing ? (
//                         <input 
//                             type="text" 
//                             value={editedTitle} 
//                             onChange={(e) => setEditedTitle(e.target.value)} 
//                         />
//                     ) : projectData.CP_Title}
//                     <span onClick={() => setShowOptions(!showOptions)} style={{ marginLeft: '70px', cursor: 'pointer' }}>
//                         <FaEdit />
//                     </span>
//                 </h3>

//                 {showOptions && (
//                     <div className="options-modal">
//                         <div className="option-box">
//                             <button onClick={handleEditClick} style={{ display: 'flex', alignItems: 'center' }}>
//                                 <FaEdit style={{ marginRight: '5px' }} /> Edit
//                             </button>
//                         </div>
//                         <div className="option-box">
//                             <button onClick={handleDeleteClick} style={{ color: 'red', display: 'flex', alignItems: 'center' }}>
//                                 <FaTrash style={{ marginRight: '5px' }} /> Delete Project
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {isEditing ? (
//                     <div>
//                         <h6>
//                             Type: <input 
//                                 type="text" 
//                                 value={editedType} 
//                                 onChange={(e) => setEditedType(e.target.value)} 
//                             />
//                         </h6>
//                         <p>
//                             Synopsis: 
//                             <textarea 
//                                 value={editedDescription} 
//                                 onChange={(e) => setEditedDescription(e.target.value)} 
//                                 rows={4}
//                                 style={{ width: '100%' }}
//                             />
//                         </p>
//                         <button onClick={handleSave}>Save</button>
//                     </div>
//                 ) : (
//                     <div>
//                         <h6>Type: {projectData.CP_Type}</h6>
//                         <p>Synopsis: {projectData.CP_Description.length > 500 ? `${projectData.CP_Description.substring(0, 500)}...` : projectData.CP_Description}</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default ParticularProjectDetails;






import React, { useState , useEffect } from 'react';
import { FaBolt, FaUpload, FaImage, FaEdit, FaTrash } from 'react-icons/fa'; // Importing icons from react-icons
import './ParticularProjectDetails.css';
import axios from 'axios';
import Loader from '../components/Loader';
import Server_URL from '../SERVER_URL';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';

function ParticularProjectDetails({ projectData, onUpdate, onDelete , onUpdateImage}) {

    const { CP_Title = '', CP_Description = '', CP_Type = '' } = projectData || {};
   
    const fileInputRef = useRef();

    const handleButtonClick = () => {
        fileInputRef.current.click(); // Open the file dialog
    };


    const {OID} = useParams()
    

    const navigate = useNavigate();


    const showLockedAlert = () => {
        Swal.fire({
            title: 'Feature Locked',
            text: 'The feature is locked right now, it will be unlocked in the future.',
            icon: 'warning',
            confirmButtonText: 'OK',
        });
    };




  const [imageSrc, setImageSrc] = useState(null); // State to store the generated image source
  const [isLoading, setIsLoading] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(CP_Title);
    const [editedType, setEditedType] = useState(CP_Type);
    const [editedDescription, setEditedDescription] = useState(CP_Description);

    const [coverImage, setCoverImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

 

    useEffect(() => {
        // Update local states if projectData changes
        setEditedTitle(CP_Title);
        setEditedType(CP_Type);
        setEditedDescription(CP_Description);
    }, [CP_Title, CP_Type, CP_Description]);

    if (!projectData) {
        return <div>Loading...</div>; // Handle loading state
    }

// async function GenerateAIImage()
// {
//     setIsLoading(true)
//     try {
//         const response = await axios.get(`${Server_URL}/image`, { responseType: 'arraybuffer' });

//         if (response.status === 200) {
//             // Create a blob from the response data and generate a URL
//             const blob = new Blob([response.data], { type: 'image/webp' });
//             const url = URL.createObjectURL(blob);

//             // Update the image source state
//             setImageSrc(url);

//             Swal.fire({
//                 title: 'Success!',
//                 text: 'Image generated successfully',
//                 icon: 'success',
//                 confirmButtonText: 'OK'
//             });

           
//         } else {
//             console.error('Error generating image:', response.statusText);

//             console.log(response)
            
//             Swal.fire({
//                 title: 'Error!',
//                 text: response.statusText,
//                 icon: 'error',
//                 confirmButtonText: 'Try Again'
//             });
//         }
//     } catch (error) {
//         console.error('Error generating image:', error);
//         Swal.fire({
//             title: 'Error!',
//             text: "Unknown error occured",
//             icon: 'error',
//             confirmButtonText: 'Try Again'
//         });
      

//     }
//     finally {
//         setIsLoading(false); // Set loading state to false after the request is complete
//     }
// }






const handleImageUpload = async (event) => {
    const file = event.target.files[0];



    console.log('File' , file)

    if (file) {
        // Preview the image on the frontend
       

        // Prepare the file to be sent to backend
        const formData = new FormData();
        formData.append('coverPhoto', file);
        formData.append('OID', OID); // Append the OID

        

        try {
            const response = await axios.post(`${Server_URL}/upload-cover-photo`, formData,  {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const imageUrl = response.data.coverPhoto;

            console.log("ImageURL" , imageUrl)

            Swal.fire({
                title: 'Success!',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'OK'
            });


            onUpdateImage(imageUrl)

            setImageSrc(imageUrl)
            
        } catch (error) {
            console.error('Error uploading image:', error);
            Swal.fire({
                title: 'Success!',
                text: 'Image upload failed',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }
    }
};



    const handleEditClick = () => {
        setIsEditing(true);
        setShowOptions(false); // Hide options when editing
    };

    const handleSave = async () => {
   
        setIsLoading(true)

        const updatedData = {
            CP_Title: editedTitle,
            CP_Type: editedType,
            CP_Description: editedDescription,
        };

        try {
            await axios.put(`${Server_URL}/Updateproject/${projectData._id}`, updatedData); // Replace with your actual endpoint
            // onUpdate(updatedData); // Call the update function passed from the parent

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your details updated successfully!',
                confirmButtonText: 'OK',
            });

            setIsEditing(false); // Exit editing mode

            onUpdate({ ...projectData, ...updatedData });


        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There was an error updating your details.',
                confirmButtonText: 'OK',
            });
            console.error('Error updating project:', error);
        }
        finally {
            setIsLoading(false); // Set loading state to false after the request is complete
        }
    };

    const handleDeleteClick = async () => {
        // Logic to handle delete action (e.g., confirm deletion and call API)
        setIsLoading(true)

        try {
            await axios.delete(`${Server_URL}/deleteproject/${projectData._id}`); // Replace with your actual endpoint
            // onUpdate(updatedData); // Call the update function passed from the parent

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your details deleted successfully!',
                confirmButtonText: 'OK',
            });

        
            onDelete()
            navigate('/dashboard'); 



        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There was an error deleting your details.',
                confirmButtonText: 'OK',
            });
            console.error('Error updating project:', error);
        }
        finally {
            setIsLoading(false); // Set loading state to false after the request is complete
        }
    };







    return (
        <div className='particular-project-details-container'>
            {isLoading && <Loader />} {/* Show Loader if loading */}

            <div className='Project-cover'>
                <div className="cover-image-placeholder">
                    {/* Placeholder for cover image */}
                    {projectData.CP_Cover_Photo ? (
    <img 
        src={projectData.CP_Cover_Photo || imageSrc} 
        alt="Cover Photo" 
        style={{ width: '100%', height: 'auto' }} 
    />
) : (
    <FaImage color="#007bff" style={{ width: '350px', height: '150px' }} />
)}
                </div>

                <div className="button-container">
                    <button onClick={showLockedAlert} className="generate-button">
                        <FaBolt style={{ marginRight: '8px' }} /> Generate Cover
                    </button>
                    <button onClick={handleButtonClick} type='file'   className="upload-button">
                        <FaUpload style={{ marginRight: '8px' }} /> Upload Cover
                    </button>

                    <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                style={{ display: 'none' }} // Hide the actual file input
                accept="image/*" // Optional: Restrict to image files
            />



                </div>
            </div>

            <div id='details-particular-project'>
                <h3>
                    Title: {isEditing ? (
                        <input 
                            type="text" 
                            value={editedTitle} 
                            onChange={(e) => setEditedTitle(e.target.value)} 
                        />
                    ) : projectData.CP_Title}
                    <span onClick={() => setShowOptions(!showOptions)} style={{ marginLeft: '70px', cursor: 'pointer' }}>
                        <FaEdit />
                    </span>
                </h3>

                {showOptions && (
                    <div className="options-modal">
                        <div className="option-box">
                            <button onClick={handleEditClick} style={{ display: 'flex', alignItems: 'center' }}>
                                <FaEdit style={{ marginRight: '5px' }} /> Edit
                            </button>
                        </div>
                        <div className="option-box">
                            <button onClick={handleDeleteClick} style={{ color: 'red', display: 'flex', alignItems: 'center' }}>
                                <FaTrash style={{ marginRight: '5px' }} /> Delete Project
                            </button>
                        </div>
                    </div>
                )}

                {isEditing ? (
                    <div>
                        <h6>
                            Type: <input 
                                type="text" 
                                value={editedType} 
                                onChange={(e) => setEditedType(e.target.value)} 
                            />
                        </h6>
                        <p>
                            Synopsis: 
                            <textarea 
                                value={editedDescription} 
                                onChange={(e) => setEditedDescription(e.target.value)} 
                                rows={4}
                                style={{ width: '100%' }}
                            />
                        </p>
                        <button onClick={handleSave}>Save</button>
                    </div>
                ) : (
                    <div>
                        <h6>Type: {projectData.CP_Type}</h6>
                        <p>Synopsis: {projectData.CP_Description.length > 500 ? `${projectData.CP_Description.substring(0, 500)}...` : projectData.CP_Description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ParticularProjectDetails;
