import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className="container mx-auto px-4 py-2">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
