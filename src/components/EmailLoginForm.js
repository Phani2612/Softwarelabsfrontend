import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './EmailLoginForm.css'; // Ensure you have this CSS file
import axios from 'axios'
import Server_URL from '../SERVER_URL';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // You can install react-icons using npm if you don't have it
import { useState } from 'react';
import { useAuth } from '../Authcontext';

const EmailLoginForm = ({ onBack }) => {



const Navigate = useNavigate()

const { setAuth } = useAuth(); // Destructure setAuth from useAuth

const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState); // Toggle password visibility
  };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .max(15, 'Password cannot exceed 15 characters')
                .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
                .matches(/\d/, 'Password must contain at least one number')
                .required('Required'),
        }),
        

        onSubmit: async (values) => {
            console.log('Form Values:', values);
            
            try {
                // Make a POST request to the backend login endpoint with form data
                const response = await axios.post(`${Server_URL}/login`, values);
        
                // Destructure the response data for better readability
                const { message, redirect_url , SESSION_INFO } = response.data;


       console.log(SESSION_INFO)
        
                // Check for redirection URL to decide where to navigate
                if (redirect_url) {

                    localStorage.setItem('User_Email' , values.email)

                    
                    console.log('Login successful:', message);
                    // Redirect to the specified URL (e.g., dashboard)

                    localStorage.setItem('Session_token' , SESSION_INFO )

                    setAuth(true)

                    Swal.fire({
                        title: 'Success!',
                        text: message,
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });

                   

                    window.location.href = redirect_url;

                } else {
                    // Handle cases where login is unsuccessful but no redirect
                    console.log('Login response:', message);

                   
                   
                    Swal.fire({
                        title: 'Error!',
                        text: message,
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    });

                    
                }
            } catch (error) {
                // Check if error response is available for more details

                console.log('sadsadasd')
                if (error.response) {
                    console.error('Login error:', error.response.data.message);
                    // Optional: Display an error message on the UI
                    Swal.fire({
                        title: 'Login Failed!',
                        text: error.response.data.message,
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    });

                    Navigate('/register')

                    
                } else {
                    // Handle any unexpected or network errors
                    console.error('Network or unexpected error:', error.message);
                   

                    Swal.fire({
                        title: 'Oops!',
                        text: 'An unexpected error occurred. Please try again later.',
                        icon: 'error',
                        confirmButtonText: 'Close'
                    });
                }
            }
        },



    });

    return (
        <div>

<div className="email-login-form">
            <button onClick={onBack} className="back-button">Back</button>
            <h2 className="form-title">Login with Email</h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input-field"
                        {...formik.getFieldProps('email')} // Bind input to Formik state
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div>
                    <input
                         type={showPassword ? 'text' : 'password'} // Change input type based on state
                        placeholder="Password"
                        className="input-field"
                        {...formik.getFieldProps('password')} // Bind input to Formik state
                    />

<button
          type="button"
          className="toggle-password-btn"
          onClick={togglePasswordVisibility} // Toggle password visibility
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Conditionally render eye icon */}
        </button>


                    {formik.touched.password && formik.errors.password ? (
                        <div className="error">{formik.errors.password}</div>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-light" id="loginbutton">Login</button>
            </form>
            <a href="#" className="forgot-password-link">Forgot password?</a>
            <p className="terms-text">By signing up, you agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="privacy-link">Privacy Policy</a>.</p>

            
        </div>


        </div>
    );
};

export default EmailLoginForm;
