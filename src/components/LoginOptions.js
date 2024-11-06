// LoginOptions.js
import React from 'react';
import { Link } from 'react-router-dom';
import { myAuth, myProvider } from './Firebase';
import { signInWithPopup } from 'firebase/auth';
import Server_URL from '../SERVER_URL.js';
import axios from 'axios';
import './LoginOptions.css';
import { useAuth } from '../Authcontext.js';


const LoginOptions = ({ onEmailClick }) => {

  const {setAuth} = useAuth(); // Destructure setAuth from useAuth


  async function googleLogin() {
    signInWithPopup(myAuth, myProvider)
      .then(async function (output) {
        const user = myAuth.currentUser;
        const username = user.displayName;
        const email = user.email;
        const uid = user.uid;
        const profilePic = user.photoURL;

        localStorage.setItem('User_Email', email);
        localStorage.setItem('User_Photo', profilePic);

        setAuth(true)

        try {
          const response = await axios.post(`${Server_URL}/store-user`, {
            username,
            email,
            uid,
            profilePic
          });
          console.log('User stored in database:', response.data);
        } catch (error) {
          console.error('Error storing user in database:', error);
        }

        window.location.pathname = '/dashboard';
      })
      .catch((error) => {
        console.log('Error during Firebase login:', error);
      });
  }

  return (
    <div className="login-options-container">
      <div className="login-options-card">
        <h2>Welcome!</h2>
        <p>Select a login method to continue</p>
        <button onClick={googleLogin} className="login-button google-login">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
            <path fill="#4285F4" d="M24 9.5c3.3 0 5.8 1.4 7.1 2.6l5.2-5.2C33.2 4.4 28.7 2 24 2 15.9 2 9.2 6.8 6.6 13.3l6.4 5c1.7-5 6.4-8.8 11-8.8z" />
            <path fill="#34A853" d="M47.5 24.5c0-1.7-.1-3.4-.4-5H24v9.4h13.4c-1.2 3.4-4.1 6-7.9 7.2v5.9h7.9C42.9 37 47.5 31.3 47.5 24.5z" />
            <path fill="#FBBC05" d="M13 27.1c-.5-1.4-.8-3-.8-4.6s.3-3.2.8-4.6l-6.4-5c-1.3 2.6-2.1 5.5-2.1 9.6s.8 7 2.1 9.6l6.4-5z" />
            <path fill="#EA4335" d="M24 47c5.7 0 10.5-1.9 14-5.3l-6.6-5.4c-2.1 1.4-4.8 2.2-7.4 2.2-4.6 0-8.6-2.9-10.1-6.8l-6.4 5c3.6 6.2 10 10.3 17.4 10.3z" />
          </svg>
          Login with Google
        </button>

        <button className="login-button email-login" onClick={onEmailClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#000" />
          </svg>
          Login with Email
        </button>

        <Link to="/forgot" className="forgot-password-link">
          Forgot Password?
        </Link>
        
        <div className="register-link">
          <Link to="/register">New user? Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginOptions;
