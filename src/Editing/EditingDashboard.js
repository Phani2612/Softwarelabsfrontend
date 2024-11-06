import React, { useState, useEffect } from 'react';
import EditingNavbar from './EditingNavbar';
import EditingSidebar from './EditingSidebar';
import './EditingDashboard.css';
import EditorPage from './EditorPage';
import Server_URL from '../SERVER_URL';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditingDashboard() {
    const { OID, ScreenPlayID, BreakdownID, TreatmentID } = useParams();
    const [data, setData] = useState('');
    const [title, setTitle] = useState('');


console.log(Server_URL)

    useEffect(() => {
        if (ScreenPlayID) {
            // Fetch Screenplay data

            console.log('hello')
            axios.get(`${Server_URL}/getgenerated/${ScreenPlayID}`)
                .then((response) => {
                    if (response.data && response.data.screenplay) {
                        setData(response.data.screenplay.SP_Generated_Data);
                        setTitle(response.data.screenplay.SP_Title);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching screenplay:', error);
                });
        } else if (BreakdownID) {

            console.log(BreakdownID)
            // Fetch Breakdown data
            axios.get(`${Server_URL}/breakdown/${BreakdownID}`)
                .then((response) => {

                    console.log('Response', response)
                    if (response.data && response.data.screenplay) {
                        setData(response.data.screenplay.B_Generated_Data);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching breakdown:', error);
                });
        } else if (TreatmentID) {

            console.log('hello')
            // Fetch Treatment data
            axios.get(`${Server_URL}/treatment/${TreatmentID}`)
                .then((response) => {
                    if (response.data && response.data.screenplay) {
                        setData(response.data.screenplay.T_Generated_Data);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching treatment:', error);
                });
        }
    }, [ScreenPlayID, BreakdownID, TreatmentID]);

    return (
        <div>
            <EditingNavbar Title={title} />
            <EditingSidebar />
            <EditorPage Data={data} ScreenPlayID={ScreenPlayID} BreakdownID={BreakdownID} TreatmentID={TreatmentID} />

        </div>
    );
}

export default EditingDashboard;
