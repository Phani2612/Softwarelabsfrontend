import React, { useEffect, useState } from 'react';
import './EditorPage.css';
import Server_URL from '../SERVER_URL';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { jsPDF } from 'jspdf'; // Import jsPDF

const EditorPage = ({ Data, ScreenPlayID, BreakdownID, TreatmentID }) => {
    const [content, setContent] = useState(Data || "Start writing here...");
    
    const [history, setHistory] = useState([content]); // History stack
    const [historyIndex, setHistoryIndex] = useState(0); // Current index in the history stack

    function SaveContent() {
        if (content !== Data) {
            let updateURL;
            if (ScreenPlayID) {
                updateURL = `${Server_URL}/updateScreenplay/${ScreenPlayID}`;
            } else if (BreakdownID) {
                updateURL = `${Server_URL}/updateBreakdown/${BreakdownID}`;
            } else if (TreatmentID) {
                updateURL = `${Server_URL}/updateTreatment/${TreatmentID}`;
            } else {
                console.error("No valid ID found for updating content.");
                return; // Exit if no valid ID is found
            }

            // Perform the update
            axios.put(updateURL, { updatedContent: content })
                .then((response) => {
                    console.log("Content updated in database:", response.data);

                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Your content has been updated successfully!',
                        confirmButtonText: 'OK',
                    });
                })
                .catch((error) => {
                    console.error("Error updating content:", error);

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'There was an error updating your content.',
                        confirmButtonText: 'OK',
                    });
                });
        }
    }

    // Function to download content as PDF
    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text(content, 10, 10); // Add text to the PDF at (10, 10) position
        doc.save(`${ScreenPlayID || BreakdownID || TreatmentID}.pdf`); // Download PDF with ID as filename
    };

    const handleContentChange = (event) => {
        const newContent = event.target.value;

        // Update the history only if the content is different
        if (newContent !== content) {
            // Slice the history array to the current index + 1
            const newHistory = history.slice(0, historyIndex + 1);
            newHistory.push(newContent);
            setHistory(newHistory);
            setHistoryIndex(newHistory.length - 1); // Move index to the latest state
        }

        setContent(newContent);
    };

    const undo = () => {
        if (historyIndex > 0) {
            setHistoryIndex(historyIndex - 1);
            setContent(history[historyIndex - 1]);
        }
    };

    const redo = () => {
        if (historyIndex < history.length - 1) {
            setHistoryIndex(historyIndex + 1);
            setContent(history[historyIndex + 1]);
        }
    };

    // Update `content` state whenever `Data` prop changes
    useEffect(() => {
        setContent(Data || "Start writing here...");
    }, [Data]);

    return (
        <div className="editor-page">
            <div className="toolbar">
                <div className="toolbar-group">
                    <span className="material-icons" title="Info">info</span>
                    <span onClick={undo} className="material-icons" title="Undo">undo</span>
                    <span onClick={redo} className="material-icons" title="Redo">redo</span>
                    <span onClick={SaveContent} className="material-icons" title="Save">save</span>
                    <span onClick={downloadPDF} className="material-icons" title="Download">file_download</span>
                </div>
                <div className="toolbar-group">
                    <span className="material-icons" title="History">history</span>
                    <span className="material-icons" title="Medical Services">medical_services</span>
                    <span className="material-icons" title="Comments">comment</span>
                    <span className="material-icons" title="Insights">psychology</span>
                    <span className="material-icons" title="Auto Mode">auto_mode</span>
                </div>
            </div>

            <textarea
                className="content-display"
                value={content}
                onChange={handleContentChange}
            />
        </div>
    );
};

export default EditorPage;
