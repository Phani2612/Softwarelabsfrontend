
// src/components/Dashboard.js
import React from 'react';
import Navigationbar from './Navigationbar';
import Sidebar from './Sidebar';


import { useState , useEffect } from 'react';
import ProjectModal from './ProjectModal';

import axios from 'axios';
import Server_URL from '../SERVER_URL';



import ParticularProjectDetails from './ParticularProjectDetails';
import { useParams } from 'react-router-dom';
import Tools from './Tools';
import ScriptModal from './ScriptModal';
import JourneyModal from './JourneyModal';
import ScriptCreationModal from './ScriptCreationModal';
import TreatmentModal from './TreatmentModal';
import ActOneModal from './ActOneModal';
import BreakdownModal from './BreakdownModal';



import './ParticularProject.css'
import FetchScript from './FetchScript';
import FetchTreatment from './FetchTreatment';
import FetchBreakdown from './FetchBreakdown'


import Loader from '../components/Loader';


function ParticularProject() {


    const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility
    const [projectData, setProjectData] = useState(null); // State to hold fetched project data

    const [DisplayData , setDisplayData] = useState([])

    const [isLoading, setIsLoading] = useState(true); // Loader state

    const [isScriptModalOpen, setScriptModalOpen] = useState(false); // New state for ScriptModal
    const [isJourneyModalOpen , setJourneyModalOpen] = useState(false)
    const [isScriptCreationModalOpen , setScriptCreationModalOpen] = useState(false)
    const [isTreatmentModalOpen , setisTreatmentModalOpen] = useState(false)

    const [isActModalOpen , setisActModalOpen] = useState(false)


    const [isBreakdownModalOpen , setisBreakdownModalOpen] = useState(false)



    const [activeDropdown, setActiveDropdown] = useState(null); // State to manage active dropdown



    const toggleDropdown = (id) => {
        setActiveDropdown(activeDropdown === id ? null : id); // Toggle the dropdown for the clicked script
    };
    
    






    const closeAllModals = () => {
        setScriptModalOpen(false);
        setJourneyModalOpen(false);
        setScriptCreationModalOpen(false);
        setisTreatmentModalOpen(false);
        setisActModalOpen(false);
        setModalOpen(false);
    };

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


    

    const openScriptModal = () => {
        // closeAllModals(); // Close all other modals
        setScriptModalOpen(true); // Open the ScriptModal
    };


    const closeScriptModal = () => {setScriptModalOpen(false) ; // Function to close ScriptModal

        setJourneyModalOpen(false)
        setScriptCreationModalOpen(false)
        setisTreatmentModalOpen(false)
    }

   


    const openJourneyModal = () => {
        // closeAllModals(); // Close all other modals
        setJourneyModalOpen(true);
    };
    const closeJourneyModal = ()=>setJourneyModalOpen(false)



    const openScriptcreationModal = () => {
        // closeAllModals(); // Close all other modals
        setScriptCreationModalOpen(true);
    };

    const closeScriptCreationModal = ()=>setScriptCreationModalOpen(false)


    const openTreatmentModal = () => {
    closeAllModals(); // Close all other modals
    
    setisTreatmentModalOpen(true);
};
    const closeTreatmentModal = ()=>setisTreatmentModalOpen(false)


   


    const openActOneModal = () => {
        // closeAllModals(); // Close all other modals
        setisActModalOpen(true);
    };
    
    const closeActOneModal = ()=>setisActModalOpen(false)


    const openBreakdownModal = ()=>{

        //   closeAllModals()

          setisBreakdownModalOpen(true)
    }

    const closeBreakdownModal = ()=> setisBreakdownModalOpen(false)


    const {OID} = useParams()


    const handleUpdateImage = (updatedCoverImage) => {
        setProjectData((prevData) => ({
            ...prevData,
            
CP_Cover_Photo: updatedCoverImage, // Update cover image directly in the state
        }));
    };

console.log(projectData)

    const handleUpdate = (updatedData) => {
        setProjectData(updatedData); // Update project data locally in the parent
    };

    const handleDelete = () => {
        setProjectData(null); // Remove projectData from the state to reflect deletion in the UI
    };


    const fetchProjectData = async () => {
        try {
            const response = await axios.get(`${Server_URL}/get-project/${OID}`); // Assuming you have this endpoint
            setProjectData(response.data);
            setIsLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.error('Error fetching project data:', error);
        }
    };
    

    useEffect(() => {
        

        fetchProjectData();
    }, [OID]); // Fetch data whenever OID changes

  

   

   
    if (isLoading) {
        return <Loader />; // Show loader component until data is fetched
    }




   


// The below is for handling update for treatment




  

    return (
        <div className="dashboard-container">
            <Navigationbar openModal={openModal} />
            <Sidebar openModal={openModal} />
            <div className="dashboard-content"> {/* Content area for Welcome and other components */}
                {/* <Welcome openModal = {openModal} /> */}

                <ParticularProjectDetails  projectData={projectData}  onUpdate={handleUpdate} onDelete={handleDelete} onUpdateImage = {handleUpdateImage}   />

                <Tools  openScriptModal={openScriptModal} openBreakdownModal={openBreakdownModal} />


                <h2 id='particular-h2'  >Screenplay:</h2>


                <FetchScript/>
 
                <FetchTreatment/>
    
                <FetchBreakdown/>  


                <ScriptModal     openJourneyModal = {openJourneyModal}  isOpen={isScriptModalOpen} onClose={closeScriptModal} /> {/* Use the state to control ScriptModal */}
                
                <JourneyModal   openTreatmentModal = {openTreatmentModal}  openScriptcreationModal = {openScriptcreationModal}   isOpen={isJourneyModalOpen} onClose={closeScriptModal}  back = {closeJourneyModal} />

                <ScriptCreationModal isOpen={isScriptCreationModalOpen}  onClose={closeScriptModal} back = {closeScriptCreationModal} />

                <TreatmentModal openActOneModal = {openActOneModal}   isOpen={isTreatmentModalOpen}  onClose={closeScriptModal} back = {closeTreatmentModal}    />

                <ActOneModal   isOpen={isActModalOpen} onClose={closeActOneModal} />

                <ProjectModal isOpen={isModalOpen} onClose={closeModal} />

                <BreakdownModal isOpen={isBreakdownModalOpen} onClose={closeBreakdownModal}  />
            </div>
        </div>
    );
}

export default ParticularProject;









