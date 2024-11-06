import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './Authcontext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();
  const location = useLocation();

console.log(auth,"protected route")

  if (location.pathname.startsWith('/reset')) {
    return children;
  }

  


  if (!auth) {
    // Redirect to login page if not authenticated

   
    return <Navigate to="/login" state={{ from: location }} />;
  }


console.log("Auth details",auth)
  return children
};

export default ProtectedRoute;
