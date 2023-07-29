import React, { useState } from 'react';
import { CloseIcon, DownArrow, EditIcon, UserIcon } from '../Icons';
import SettingsIcon from '../Icons/SettingsIcon';
import LogoutIcon from '../Icons/LogoutIcon';
import 'react-phone-input-2/lib/style.css';
import { RandomNdigitnumber, sendErrorToast } from '@/utils';
import ProfileEditor from '../Dashboard/ProfileEditor';

const Header = () => {
  //state
  //modals
  const [profileEditorModal, setProfileEditorModal] = useState(false);
  //user
  const [userDetails, setUserDetails] = useState({
    userName: 'test_user',
    email: 'test.user@example.com',
    phone: '+1 555-123-4567',
    gender: 'male',
    fullName: 'test user',
    currentRole: 'software developer',
    experience: 5,
    skills: ['64c4db62dfe5386a7fbeac59', '64c4db62dfe5386a7fbeac60'],
    intrestAreas: ['database', 'devops'],
    _id: '123456',
  });
  //dropdown
  const [opendropdown, setOpendropdown] = useState(false);

  return (
    <div className="w-full flex justify-end items-center px-8 py-2 font-sans">
      <div className="relative">
        <div
          className="flex justify-center items-center gap-4 text-white cursor-pointer hover:bg-hover rounded-md px-2 py-1 active:scale-95 transition-all duration-300"
          onClick={() => {
            setOpendropdown(!opendropdown);
          }}
        >
          <UserIcon className={'w-8 h-8 '} />
          <div className="font-medium font18">
            {userDetails?.fullName || ''}
          </div>
          <DownArrow className={`w-4 h-4`} />
        </div>
        {opendropdown && (
          <div
            className={`absolute top-10 right-0 rounded-md bg-card text-primary min-w-[230px] p-2 grid z-10`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="w-full h-full flex-col justify-start items-start">
              <div className="w-full flex justify-start items-center gap-2 p-2 ">
                <UserIcon className={'w-12 h-12 '} />
                <div className="w-full flex flex-col justify-start items-start pl-1">
                  <div className="w-full truncate font-medium font16">
                    {userDetails?.fullName || ''}
                  </div>
                  <div className="w-full truncate font12 text-secondary">
                    {userDetails?.email || ''}
                  </div>
                </div>
              </div>
              <div
                className="w-full flex justify-start items-center gap-2 p-2 rounded-md hover:bg-hover cursor-pointer"
                onClick={() => {
                  setProfileEditorModal(!profileEditorModal);
                  setOpendropdown(false);
                }}
              >
                <SettingsIcon className={'w-6 h-6 '} />
                <div className="w-full truncate font-medium font16">
                  User Profile
                </div>
              </div>
              <div className="w-full flex justify-start items-center gap-2 p-2 rounded-md hover:bg-hover cursor-pointer">
                <LogoutIcon className={'w-6 h-6 '} />
                <div className="w-full truncate font-medium font16">
                  Log Out
                </div>
              </div>
            </div>
          </div>
        )}
        {opendropdown && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 cursor-pointer"
            onClick={() => {
              setOpendropdown(false);
            }}
          ></div>
        )}
      </div>
      {profileEditorModal && (
        <ProfileEditor
          CloseFunction={() => {
            setProfileEditorModal(false);
            setOpendropdown(false);
          }}
          userData={userDetails}
        />
      )}
    </div>
  );
};

export default Header;
