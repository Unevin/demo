import React from 'react';
import CloseIcon from '../Icons/CloseIcon';

const ModalComp = ({ className, Mainbody, Header, CloseFunction }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#6C6C6C20] backdrop-blur-sm flex justify-center items-center">
      <div
        className={`${className} rounded-md bg-card flex flex-col justify-start items-start`}
      >
        <div className="w-full py-2 px-4 text-primary bg-subcard rounded-t-md flex justify-between items-center">
          {Header()}
          <div
            className="flex justify-center items-center cursor-pointer active:scale-95 duration-300 transition-all"
            onClick={() => {
              CloseFunction();
            }}
          >
            <CloseIcon className="w-6 h-6 text-primary" />
          </div>
        </div>
        {Mainbody()}
      </div>
    </div>
  );
};

export default ModalComp;
