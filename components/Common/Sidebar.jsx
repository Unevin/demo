import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LoaderComp from '../SmallComps/LoaderComp';

const Sidebar = ({ selected }) => {
  // // loader
  const [routerLoader, setRouterLoader] = useState(false);
  //router
  const router = useRouter();
  const { uid } = router.query;
  //useEffect
  useEffect(() => {
    //<-- this useEffect will be triggered just one time at component initialization
    router.events.on('routeChangeStart', (url) => {
      console.log('state', 'Route is changing');
      setRouterLoader(true);
    });
    router.events.on('routeChangeComplete', (url) => {
      console.log('state', 'Route is changed');
      setRouterLoader(false);
    });
  }, []);

  return (
    <div className="w-1/4 min-h-screen grid ">
      {routerLoader && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#5C5C5C40] backdrop-blur-sm z-20">
          <LoaderComp
            className="w-full h-full flex justify-center items-center "
            height="60"
          />
        </div>
      )}
      <div className="w-full h-full flex flex-col justify-between items-center p-2 ">
        <div className="w-full p-2 flex justify-start items-center">
          <div className="w-full hidden md:block">
            <Image
              src="/logo.svg"
              alt="sign in page logo"
              className="w-[80%] aspect-auto"
              width={550}
              height={110}
            />
          </div>
          <div className="w-full max-h-[40px] block md:hidden">
            <Image
              src="/logoicon.svg"
              alt="sign in page logo"
              className="max-w-[80%] max-h-[40px] aspect-auto"
              width={82}
              height={106}
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-start items-start gap-4 p-2 rounded-md bg-background ">
          <div
            className={`w-full py-2 ${
              selected == 'members' ? 'bg-menu' : ''
            } hover:bg-card px-2 rounded-md font18 font-medium text-primary tracking-wide cursor-pointer`}
            onClick={() => {
              if (selected !== 'members') {
                router.push(`/${uid}/dashboard`);
              }
            }}
          >
            Members
          </div>
          <div
            className={`w-full py-2 ${
              selected == 'projects' ? 'bg-menu' : ''
            } hover:bg-card px-2 rounded-md font18 font-medium text-primary tracking-wide cursor-pointer`}
            onClick={() => {
              if (selected !== 'projects') {
                router.push(`/${uid}/projects`);
              }
            }}
          >
            Projects
          </div>
          <div
            className={`w-full py-2 ${
              selected == 'discussion' ? 'bg-menu' : ''
            } hover:bg-card px-2 rounded-md font18 font-medium text-primary tracking-wide cursor-pointer`}
            onClick={() => {
              if (selected !== 'discussion') {
                router.push(`/${uid}/discussion`);
              }
            }}
          >
            Discussion & Showcase
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
