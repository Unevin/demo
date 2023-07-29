import React from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';

const ProjectDetailsMain = () => {
  return (
    <div className="w-full min-h-screen bg-background flex justify-between items-start gap-2">
      <Sidebar selected={'projects'} />
      <div className="w-full min-h-screen grid">
        <div className="w-full h-full flex flex-col justify-start items-start ">
          <Header />
          <div className="w-full h-full">Project DetailContainer</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsMain;
