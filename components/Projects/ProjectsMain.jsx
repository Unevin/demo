import React from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';

const ProjectsMain = () => {
  return (
    <div className="w-full min-h-screen bg-background flex justify-between items-start gap-2">
      <Sidebar selected={'projects'} />
      <div className="w-full min-h-screen grid">
        <div className="w-full h-full flex flex-col justify-start items-start border border-red-600">
          <Header />
          <div className="w-full h-full">Project Main</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMain;
