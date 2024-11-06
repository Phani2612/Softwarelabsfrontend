import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';



// Utility to get values from local storage
const getSessionData = () => {
  const Session = localStorage.getItem('Session_token');
//   const decryptedSessionToken = CryptoJS.AES.decrypt(decodeURIComponent(encryptedSession), secretKey);
//   const sessionToken = decryptedSessionToken.toString(CryptoJS.enc.Utf8);



  return {
    Session,
    lastAccessedPath: localStorage.getItem('Last_Accessed') || '/'
  };
};

// RedirectWrapper component to handle conditional redirects
const RedirectWrapper = ({ children }) => {
  const location = useLocation();
  const [redirectPath, setRedirectPath] = useState(null);


  


  useEffect(() => {
    const { Session, lastAccessedPath } = getSessionData();

    console.log(Session , lastAccessedPath)
    if (Session) {
      // Redirect authenticated users away from login page
      if (location.pathname === '/login') {
        setRedirectPath(lastAccessedPath);
      }
    }

    // No redirection if user is on a valid path
  }, [location.pathname]);

  // Redirect logic
  if (redirectPath) {
    return <Navigate to={redirectPath} />;
  }

  return children;
};

export default RedirectWrapper;
