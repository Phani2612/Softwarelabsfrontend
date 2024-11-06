// RouteChangeTracker.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import Server_URL from './SERVER_URL';

const updateSessionPath = async (path , SESSIONTOKEN_FROM_LOCAL) => {
  try {
    await Axios.post(`${Server_URL}/updateSessionPath`, { path , SESSIONTOKEN_FROM_LOCAL }, { withCredentials: true });
  } catch (error) {
    console.error('Error updating session path:', error);
  }
};

const RouteChangeTracker = ({data}) => {
  const location = useLocation();


  

  useEffect(() => {
    if (location.pathname && location.pathname !== '/' && location.pathname != '/login') {

        localStorage.setItem('Last_Accessed' , location.pathname)

      updateSessionPath(location.pathname , data);
    }
  }, [location.pathname , data]);

  return null; // This component does not render anything
};

export default RouteChangeTracker;
