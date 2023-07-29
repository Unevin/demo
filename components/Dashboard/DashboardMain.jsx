import React from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import DashboardComp from './DashboardComp';

const DashboardMain = () => {
  return (
    <div className="w-full min-h-screen bg-background flex justify-between items-start gap-2">
      <Sidebar selected={'members'} />
      <div className="w-full min-h-screen grid">
        <div className="w-full h-full flex flex-col justify-start items-start">
          <Header />
          <div className="w-full h-full">
            <DashboardComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
