import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Server_URL from '../SERVER_URL';
import Navbar from './Navbar';
import Footer from './Footer';
import './ResetPassword.css';
import Swal from 'sweetalert2';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);
    const [passwordsMatch, setPasswordsMatch] = useState(false);

    const location = useLocation();

    // Get the token from query parameters
    const query = new URLSearchParams(location.search);
    const token = query.get('token');

    const validatePassword = (password) => {
        const errors = [];
        // Check password length
        if (password.length < 8) {
            errors.push('Password must be at least 8 characters long.');
        }
        // Check for special characters
        if (!/[!@#$%^&*]/.test(password)) {
            errors.push('Password must contain at least one special character.');
        }
        // Check for uppercase letters
        if (!/[A-Z]/.test(password)) {
            errors.push('Password must contain at least one uppercase letter.');
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidationErrors([]);
        setMessage('');

        // Validate new password
        const errors = validatePassword(newPassword);
        if (errors.length > 0) {
            setValidationErrors(errors);
            return;
        }

        // Check if passwords match
        if (newPassword !== confirmPassword) {
            setValidationErrors(['Passwords do not match.']);
            return;
        }

        try {
            const response = await axios.post(`${Server_URL}/reset-password`, {
                token,
                newPassword
            });
            setMessage(response.data.message);

            Swal.fire({
                title: 'Success!',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } catch (error) {
            setMessage('Error resetting password: ' + error.response.data.message);

            Swal.fire({
                title: 'Oops!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Close'
            });
        }
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setPasswordsMatch(value === newPassword); // Check if passwords match
    };

    return (
       <div className='resetmain'>

<Navbar />

<div className="reset-password-container">
          

            <h2 className="reset-password-title">Reset Password</h2>
            <form onSubmit={handleSubmit} className="reset-password-form">
                <div className="input-group">
                    <label>New Password:</label>
                    <div className="input-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="reset-password-input1"
                        />
                        <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? '👁️' : '👁️‍🗨️'}
                        </span>
                    </div>
                </div>
                <div className="input-group">
                    <label>Confirm Password:</label>
                    <div className="input-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                            className="reset-password-input2"
                        />
                        <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? '👁️' : '👁️‍🗨️'}

                            {passwordsMatch && <span className="tick-icon">✔️</span>}

                            
                        </span>

                       


                    </div>
                </div>
                <button type="submit" className="reset-password-button">Reset Password</button>
            </form>

            {validationErrors.length > 0 && (
                <div className="validation-errors">
                    {validationErrors.map((error, index) => (
                        <p key={index} className="error-message">{error}</p>
                    ))}
                </div>
            )}

            {message && <p className="reset-password-message">{message}</p>}

        </div>



        <Footer />
       </div>
    );
};

export default ResetPassword;