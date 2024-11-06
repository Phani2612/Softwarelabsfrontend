import React, { createContext, useContext, useState, useEffect } from 'react';
import Axios from 'axios';

import Server_URL from './SERVER_URL';


// Create Context
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const encryptedSessionToken = localStorage.getItem('Session_token');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!encryptedSessionToken) {
          // No token, user is not authenticated
          setAuth(false);
          return;
        }

        // Decrypt the session token
        // const decryptedSessionToken = CryptoJS.AES.decrypt(decodeURIComponent(encryptedSessionToken), secretKey);
        // const token = decryptedSessionToken.toString(CryptoJS.enc.Utf8);

        // If decryption failed or token is invalid
        if (!encryptedSessionToken) {
          setAuth(false);
          return;
        }

        // Make the API call with the token
        const response = await Axios.get(`${Server_URL}/check-auth`, {
          headers: {
            Authorization: encryptedSessionToken,
          },
        });


        console.log('auth context' , response)

        // Handle the response
        if (response.status === 200 && response.data.authenticated) {
         
          setAuth(true);
        } else if(response.status === 200 && response.data.authenticated === false) {
          // Token is invalid or user is not authenticated

          console.log("failed condition")
          setAuth(false);
          localStorage.removeItem('Userdata');
          localStorage.removeItem('Session_token');
          
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setAuth(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  });

  if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using AuthContext
export const useAuth = () => useContext(AuthContext);
