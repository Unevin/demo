import DiscussionMain from '@/components/Discussion/DiscussionMain';
import Head from 'next/head';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Discussion = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dev Huddle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full">
        <DiscussionMain />
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

export default Discussion;
