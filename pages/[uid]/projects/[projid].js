import ProjectDetailsMain from '@/components/Projects/ProjectDetailsMain';
import Head from 'next/head';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const ProjectDetails = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Dev Huddle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full">
        <ProjectDetailsMain />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

export default ProjectDetails;
