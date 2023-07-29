import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LoaderComp from './SmallComps/LoaderComp';
import { sendErrorToast, sendSuccessToast, validateEmail } from '@/utils';
import { useRouter } from 'next/router';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Homepage = () => {
  //state
  // //type
  const [typeLogin, setTypeLogin] = useState('login');
  // // loader
  const [routerLoader, setRouterLoader] = useState(false);
  // // text inputs
  // // //login
  const [employId, setEmployId] = useState('');
  // // // sign in
  const [nameVal, setNameVal] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [phoneVal, setPhoneVal] = useState('1');

  //router
  const router = useRouter();

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
  useEffect(() => {
    return () => {
      resetVariables();
    };
  }, []);
  const resetVariables = () => {
    setEmployId('');
    setNameVal('');
    setEmailVal('');
    setPhoneVal('');
    setTypeLogin('login');
  };
  //function
  const SubmitLogin = () => {
    if (employId.trim() == '') {
      sendErrorToast('Please add text value');
      return;
    }
    let dataToSend = {
      id: employId || '',
    };
    sendSuccessToast('Successfully Logging in');
    router.push(`/${employId}/dashboard`);
    console.log('state', 'dataToSend', dataToSend);
    resetVariables();
  };

  const SubmitSignin = () => {
    if (nameVal?.trim() == '') {
      sendErrorToast('Please enter your name.');
      return;
    }
    if (nameVal?.trim()?.length < 3) {
      sendErrorToast('Name should be atleast 3 characters ');
      return;
    }
    if (emailVal?.trim() == '') {
      sendErrorToast('Please enter your email id');
      return;
    }
    if (!validateEmail(emailVal?.trim())) {
      sendErrorToast('Please enter valid email');
      return;
    }
    let dataToSend = {
      fullName: nameVal || '',
      email: emailVal || '',
      phone: '+' + phoneVal || '',
    };
    sendSuccessToast('Successfully Created your account');
    console.log('state', 'dataToSend', dataToSend);
    resetVariables();
  };

  return (
    <div className="w-full min-h-screen flex flex-col-reverse md:flex-row justify-center md:justify-between items-center bg-background">
      {routerLoader && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#5C5C5C40] backdrop-blur-sm z-20">
          <LoaderComp
            className="w-full h-full flex justify-center items-center "
            height="60"
          />
        </div>
      )}
      <div className="w-full md:min-h-screen grid p-4">
        <div className="w-full h-full bg-menu rounded-md flex flex-col justify-center items-center px-4 md:px-8 lg:px-12 xl:px-16 gap-4">
          <div className="font40 font-bold w-full text-left text-white">
            {typeLogin == 'login' ? ' Welcome back,' : 'Create an account'}
          </div>
          <div className="w-full flex justify-start items-center font20 text-[#F8F8F8]">
            {typeLogin == 'login'
              ? 'Welcome back, please enter your details'
              : "Let's get started with creation of your account"}
          </div>
          {typeLogin == 'login' ? (
            <div className="w-full flex flex-col justify-center items-center gap-4 py-8">
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <label className="font18 text-primary font-medium px-2">
                  Employ Id
                </label>
                <input
                  id="employId"
                  name="employId"
                  type="text"
                  className="w-full h-10 font16 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                  value={employId}
                  onChange={(e) => {
                    setEmployId(e.target.value);
                  }}
                  placeholder="Please enter your employ id"
                />
              </div>
              <button
                className="px-8 py-2 font16 font-medium bg-subcard hover:bg-hover rounded-md text-white active:scale-95 duration-300 transition-all mt-4"
                onClick={() => {
                  SubmitLogin();
                }}
              >
                Login
              </button>

              <div
                className="flex justify-center items-center w-full text-14 font-normal text-primary gap-2 cursor-pointer"
                onClick={() => {
                  setTypeLogin('signup');
                }}
              >
                <span>Don't have an account?</span>
                <span className="font-medium">Sign up</span>
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col justify-center items-center gap-4 py-8">
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <label className="font18 text-primary font-medium px-2">
                  Name *
                </label>
                <input
                  id="employName"
                  name="employName"
                  type="text"
                  className="w-full h-10 font16 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                  value={nameVal}
                  onChange={(e) => {
                    setNameVal(e.target.value);
                  }}
                  placeholder="Please enter your name"
                />
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <label className="font18 text-primary font-medium px-2">
                  Email *
                </label>
                <input
                  id="employEmail"
                  name="employEmail"
                  type="text"
                  className="w-full h-10 font16 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                  value={emailVal}
                  onChange={(e) => {
                    setEmailVal(e.target.value);
                  }}
                  placeholder="Please enter your email id"
                />
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <label className="font18 text-primary font-medium px-2">
                  Phone
                </label>
                <div className="w-full h-10 rounded-md bg-white flex justify-start items-center">
                  <PhoneInput
                    inputStyle={{
                      width: '100%',
                      border: 2,
                    }}
                    buttonStyle={{
                      border: 2,
                    }}
                    country={'us'}
                    placeholder="+19876543210"
                    value={phoneVal}
                    onChange={(val) => {
                      setPhoneVal(val);
                    }}
                  />
                </div>
              </div>
              <button
                className="px-8 py-2 font16 font-medium bg-subcard hover:bg-hover rounded-md text-white active:scale-95 duration-300 transition-all mt-4"
                onClick={() => {
                  SubmitSignin();
                }}
              >
                Sign up
              </button>
              <div
                className="flex justify-center items-center w-full text-14 font-normal text-primary gap-2 cursor-pointer"
                onClick={() => {
                  setTypeLogin('login');
                }}
              >
                <span>Already have account!</span>
                <span className="font-medium">Login</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-3/4 md:w-full md:min-h-screen flex justify-center items-center p-6">
        <Image
          src="/loginlogo.svg"
          alt="sign in page logo"
          className="w-full aspect-auto"
          width={550}
          height={110}
        />
      </div>
    </div>
  );
};

export default Homepage;
