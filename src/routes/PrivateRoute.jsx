import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <button className="mx-auto btn loading"></button>;
  }

  if (user) {
    return children;
  }
  <ToastContainer />;
  return <Navigate state={{ from: location }} to="/sign-in" replace />;
};

export default PrivateRoute;
