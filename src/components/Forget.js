// src/components/Forgot.js
import React, { useState } from 'react';
import axios from 'axios';
import './Forget.css';
import Navbar from './Navbar';
import Footer from './Footer'
import Server_URL from '../SERVER_URL';
import Swal from 'sweetalert2';

const Forgot = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${Server_URL}/forgot-password`, { email });
   
            console.log(response)

            setMessage(response.data.message);

            Swal.fire({
                title: 'Success!',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'OK'
            });


        } catch (error) {
            setMessage('An error occurred. Please try again.');

            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
            console.error(error);
        }
    };

    return (
        <div className='forgetmaindiv' style={{backgroundColor : '#282c34'}} >

<Navbar/>



<div className='forgetanddetails' >


<div>

<h3 id='forgeth3' >Forgot Password</h3>

<h1  id='forgeth1'>Unlock the Full Nolan</h1>

<h3 id='forgeth3'  >Experience</h3>


</div>






<div className="forgot-container">
            <h2 className="forgot-title">Forgot Password</h2>
            <form onSubmit={handleResetPassword} className="forgot-form">
                <div className="forgot-input-group">
                    <label htmlFor="forgot-email" className="forgot-label">Email</label>
                    <input
                        type="email"
                        id="forgot-email"
                        value={email}
                        onChange={handleEmailChange}
                        className="forgot-input"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button type="submit" className="forgot-reset-button">Reset</button>
                {message && <p className="forgot-message">{message}</p>}
                <p className="forgot-terms">
                    By signing up, you agree to the <a href="#" className="forgot-link">Terms of Service</a> and <a href="#" className="forgot-link">Privacy Policy</a>.
                </p>
            </form>
        </div>




</div>

<Footer/>


        </div>
    );
};

export default Forgot;
