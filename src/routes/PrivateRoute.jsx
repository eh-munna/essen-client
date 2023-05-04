import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return (
      <progress
        className="w-full progress progress-success"
        value="100"
        max="100"
      ></progress>
    );
  }

  if (user) {
    return children;
  }
  <ToastContainer />;
  return <Navigate state={{ from: location }} to="/sign-in" replace />;
};

export default PrivateRoute;
