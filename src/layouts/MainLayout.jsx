import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="container mx-auto px-4 py-2">
      <Outlet />
    </div>
  );
};

export default MainLayout;
