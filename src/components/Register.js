import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Register.css';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import Server_URL from '../SERVER_URL';
import Swal from 'sweetalert2';


const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        phoneNumber: Yup.string().required('Required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .max(15, 'Password cannot exceed 15 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
                'Must contain uppercase, number, and special character'
            )
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
    });

    const initialValues = {
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    };

    

    const onSubmit = async (values, { setSubmitting, setFieldError }) => {
        try {
            const response = await axios.post(`${Server_URL}/register`, values);
            // alert(response.data.message);
            
            console.log(response.data)
            // Redirect to login page
            // window.location.href = response.data.redirect_url;

            
            Swal.fire({
                title: 'Success!',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'OK'
            });


            window.location.pathname = '/login'

            

        } catch (error) {
            if (error.response) {
                // Display error message from backend
                // alert(error.response.data.message);
                
                // Specific field error (optional for validation feedback)
                if (error.response.data.field === 'email') {
                    setFieldError('email', error.response.data.message);
                }

                Swal.fire({
                    title: 'Error!',
                    text: error.response.data.message,
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });


            } else {
                console.error('An error occurred:', error);
                

                Swal.fire({
                    title: 'Oops!',
                    text: 'An unexpected error occurred. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Close'
                });
            }
        } finally {
            setSubmitting(false);
        }
    };



    return (
       
<div className='registercontainer' >


<Navbar/>


<div className="RegisterForm">
            <h2 className="RegisterForm-title">Create an Account</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ setFieldValue }) => (
                    <Form className="RegisterForm-form">
                        <div className="RegisterForm-group">
                            <label>Email</label>
                            <Field type="email" name="email" className="RegisterForm-input" />
                            <ErrorMessage name="email" component="div" className="RegisterForm-error" />
                        </div>

                        <div className="RegisterForm-group">
                            <label>Phone Number</label>
                            <PhoneInput
                                country={'us'}
                                value={initialValues.phoneNumber}
                                onChange={(phone) => setFieldValue('phoneNumber', phone)}
                                inputClass="RegisterForm-phoneInput"
                                containerClass="RegisterForm-phoneContainer"
                            />
                            <ErrorMessage name="phoneNumber" component="div" className="RegisterForm-error" />
                        </div>

                        <div className="RegisterForm-group">
                            <label>Password</label>
                            <div className="RegisterForm-passwordField">
                                <Field
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    className="RegisterForm-input"
                                />
                                <button
                                    type="button"
                                    className="RegisterForm-togglePassword"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? '🙈' : '👁️'}
                                </button>
                            </div>
                            <ErrorMessage name="password" component="div" className="RegisterForm-error" />
                        </div>

                        <div className="RegisterForm-group">
                            <label>Confirm Password</label>
                            <div className="RegisterForm-passwordField">
                                <Field
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    className="RegisterForm-input"
                                />
                                <button
                                    type="button"
                                    className="RegisterForm-togglePassword"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? '🙈' : '👁️'}
                                </button>
                            </div>
                            <ErrorMessage name="confirmPassword" component="div" className="RegisterForm-error" />
                        </div>

                        <button type="submit" className="RegisterForm-submitButton">Register</button>
                    </Form>
                )}
            </Formik>
        </div>


<Footer/>


</div>



    );
};

export default RegisterForm;
