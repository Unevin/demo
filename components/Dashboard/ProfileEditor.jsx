import { RandomNdigitnumber, sendErrorToast } from '@/utils';
import React, { useEffect, useState } from 'react';
import { CloseIcon, EditIcon, PlusIcon } from '../Icons';
import ModalComp from '../Common/ModalComp';
import PhoneInput from 'react-phone-input-2';
import { useRouter } from 'next/router';
import AddSkillModal from './AddSkillModal';
import AddProjectsModal from './AddProjectsModal';
import { useSelector } from 'react-redux';

const ProfileEditor = ({ CloseFunction }) => {
  //state Varibales
  //editor
  const [editState, setEditState] = useState(false);
  const [nameVal, setNameVal] = useState('');
  const [usernameVal, setUsernameVal] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [phoneVal, setPhoneVal] = useState('1');
  const [genderVal, setgenderVal] = useState('male');
  const [experienceVal, setExperienceVal] = useState('');
  const [roleVal, setroleVal] = useState('');
  const [userId, setUserId] = useState('');
  const [skillsData, setSkillsData] = useState([]);
  const [skillDetailsDataArr, setSKillDetailsDataArr] = useState([]);
  //state
  const [showSave, setShowSave] = useState(false);
  //modals
  const [openSkillModal, setOpenSkillModal] = useState(false);
  const [projectSkillModal, setProjectSkillModal] = useState(false);

  //constant
  const genderObj = { male: 'Male', female: 'Female', other: 'Other' };

  //redux
  const userData = useSelector((state) => state.input.userDetails);

  //router
  const router = useRouter();
  const { uid } = router.query;
  const skillDetailsComplete = [
    {
      skillName: 'MongoDB',
      shortCode: 'MON',
      color: '#00EEFF',
      icon: 'mongodb-icon.png',
      description:
        'MongoDB is a source-available cross-platform document-oriented database program',
      commnuityLink: 'https://join.skype.com/mongod',
      skillType: 'database',
      createdDate: '2023-07-29T09:26:58.897Z',
      modifiedDate: '2023-07-29T09:26:58.897Z',
      _id: '64c4db62dfe5386a7fbeac60',
      __v: 0,
    },
    {
      skillName: 'Node',
      shortCode: 'NOD',
      color: '#00EEFF',
      icon: 'node-js.png',
      description:
        'node js is a source-available cross-platform document-oriented backend program',
      commnuityLink: 'https://join.skype.com/mongod',
      skillType: 'back end development',
      createdDate: '2023-07-29T09:28:58.897Z',
      modifiedDate: '2023-07-29T09:28:58.897Z',
      _id: '64c4db62dfe5386a7fbeac59',
      __v: 0,
    },
  ];

  useEffect(() => {
    console.log('state', 'userData', userData);
    if (userData && Object.keys(userData || {}).length > 0) {
      let phonenumb = userData?.phone?.slice().startsWith('+')
        ? userData?.phone.slice(1)
        : userData?.phone;
      setNameVal(userData?.fullName || '');
      setUsernameVal(userData?.userName || '');
      setEmailVal(userData?.email || '');
      setPhoneVal(phonenumb || '');
      setgenderVal(userData?.gender || '');
      setExperienceVal(userData?.experience || 0);
      setroleVal(userData?.currentRole || '');
      setUserId(userData?._id || '');
      setSkillsData(userData?.skills || []);
    }
  }, [userData]);

  useEffect(() => {
    console.log(
      'state',
      'condition',
      (skillsData || [])?.length > 0 && (skillDetailsComplete || [])?.length > 0
    );
    if (
      (skillsData || [])?.length > 0 &&
      (skillDetailsComplete || [])?.length > 0
    ) {
      let cloneData = (skillDetailsComplete || []).slice() || [];
      let skillIdClone = (skillsData || []).slice() || [];
      let emptyArr = [];
      (cloneData || []).map((skill) => {
        let skillClone = JSON.parse(JSON.stringify(skill || {})) || {};
        if (skillIdClone.includes(skill?._id)) {
          emptyArr.push(skillClone || {});
        }
      });
      console.log('state', 'emptyArr', emptyArr);
      // setSKillDetailsDataArr(emptyArr || []);
    }
  }, [skillsData, skillDetailsComplete]);

  //functions
  const SaveDetails = async () => {
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
    let datatoSend = {
      userName: usernameVal || '',
      fullName: nameVal || '',
      email: emailVal || '',
      phone: '+' + phoneVal || '',
      gender: genderVal || 'male',
      experience: experienceVal || 5,
      currentRole: roleVal || '',
    };
  };

  //components
  const HeaderComp = () => {
    return <div className="w-full font-18 font-medium">User Profile</div>;
  };
  const MainbodyComp = () => {
    return (
      <div className="w-full h-full rounded-b-md flex flex-col justify-start items-start px-2 py-2">
        <div className="w-full h-full flex flex-col justify-start items-start gap-2 px-4 overflow-y-auto ">
          <div className="w-full flex justify-between items-center gap-4">
            <div className="font18 font-medium text-primary">
              Personal Information
            </div>
            {userId == uid && (
              <div
                className="flex justify-center items-center gap-2 px-2.5 py-1.5 rounded-md cursor-pointer text-primary bg-button hover:bg-buttonhover active:scale-95 duration-300 transition-all"
                onClick={() => {
                  setEditState(!editState);
                  if (editState) {
                    setShowSave(false);
                  }
                }}
              >
                {editState ? (
                  <CloseIcon className={`w-4 h-4`} />
                ) : (
                  <EditIcon className={`w-4 h-4`} />
                )}
                <span className="font14">{editState ? 'Cancel' : 'Edit'}</span>
              </div>
            )}
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium  w-36">
                  Name
                </label>
                {!editState && (
                  <div className="w-full flex justify-start items-center font16 h-[36px] text-white px-4">
                    {nameVal || ''}
                  </div>
                )}
              </div>
              {editState && (
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                  value={nameVal}
                  onChange={(e) => {
                    setNameVal(e.target.value);
                    setShowSave(true);
                  }}
                  placeholder="Please enter your name"
                />
              )}
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium w-36">
                  User Name
                </label>
                {!editState && (
                  <div className="w-full flex justify-start items-center font16 h-[36px] text-white px-4">
                    {usernameVal || ''}
                  </div>
                )}
              </div>
              {editState && (
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                  value={usernameVal}
                  onChange={(e) => {
                    setUsernameVal(e.target.value);
                    setShowSave(true);
                  }}
                  placeholder="Please enter your user name"
                />
              )}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium w-36">
                  Email{' '}
                </label>
                {!editState && (
                  <div className="w-full flex justify-start items-center font16 h-[36px] text-white px-4">
                    {emailVal || ''}
                  </div>
                )}
              </div>
              {editState && (
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                  value={emailVal}
                  onChange={(e) => {
                    setEmailVal(e.target.value);
                    setShowSave(true);
                  }}
                  placeholder="Please enter your email"
                />
              )}
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium w-36">
                  Phone
                </label>
                {!editState && (
                  <div className="w-full flex justify-start items-center font16 h-[36px] text-white px-4">
                    {'+' + phoneVal || ''}
                  </div>
                )}
              </div>
              {editState && (
                <div className="w-full h-[36px] rounded-md font14 bg-white flex justify-start items-center">
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
                      setShowSave(true);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium w-36">
                  Gender
                </label>
                {!editState && (
                  <div className="w-full flex justify-start items-center font16 h-[36px] text-white px-4">
                    {genderObj[genderVal || ''] || ''}
                  </div>
                )}
              </div>
              {editState && (
                <select
                  name="gender"
                  id="gender"
                  className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                  value={genderVal}
                  onChange={(e) => {
                    setgenderVal(e.target.value);
                    setShowSave(true);
                  }}
                >
                  {Object.keys(genderObj || []).map((gend) => {
                    return (
                      <option key={RandomNdigitnumber(4)} value={gend}>
                        {genderObj[gend]}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium w-36">
                  Experience
                </label>
                {!editState && (
                  <div className="w-full flex justify-start items-center font16 h-[36px] text-white px-4">
                    {experienceVal || 0} Years
                  </div>
                )}
              </div>
              {editState && (
                <input
                  id="experience"
                  name="experience"
                  type="number"
                  min={0}
                  className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                  value={experienceVal}
                  onChange={(e) => {
                    setExperienceVal(e.target.value);
                    setShowSave(true);
                  }}
                  placeholder="Please enter your Experience"
                />
              )}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium w-36">
                  Current Role
                </label>
                {!editState && (
                  <div className="w-full flex justify-start items-center font16 h-[36px] text-white px-4">
                    {roleVal || ''}
                  </div>
                )}
              </div>
              {editState && (
                <input
                  id="current Role"
                  name="current Role"
                  type="text"
                  className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                  value={roleVal}
                  onChange={(e) => {
                    setroleVal(e.target.value);
                    setShowSave(true);
                  }}
                  placeholder="Please enter your current Role"
                />
              )}
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-4 py-2 mt-2 border-t border-gray-300">
            <div className="font18 font-medium text-primary">Company Info</div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <div className="w-full flex justify-between items-center gap-2 px-4">
              <label className="font16 text-secondary font-medium w-36">
                Skills
              </label>
              <div
                className="flex justify-center items-center gap-2 px-2.5 py-1.5 rounded-md cursor-pointer text-primary bg-button hover:bg-buttonhover whitespace-nowrap active:scale-95 duration-300 transition-all"
                onClick={() => {
                  setOpenSkillModal(true);
                }}
              >
                <PlusIcon className={'w-4 h-4'} />
                <span className="font14">Add Skill</span>
              </div>
            </div>
            {/* <div className="w-full flex justify-start items-center gap-3 px-6">
              {(skillDetailsDataArr || []).map((skill) => {
                return (
                  <div
                    key={RandomNdigitnumber(8)}
                    className="px-5 py-2 rounded-xl font14 font-medium bg-subcard text-primary"
                  >
                    {skill?.skillName || ''}
                  </div>
                );
              })}
            </div> */}
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <div className="w-full flex justify-between items-center gap-2 px-4">
              <label className="font16 text-secondary font-medium w-36">
                Projects
              </label>
              <div
                className="flex justify-center items-center gap-2 px-2.5 py-1.5 rounded-md cursor-pointer text-primary bg-button hover:bg-buttonhover whitespace-nowrap active:scale-95 duration-300 transition-all"
                onClick={() => {
                  setProjectSkillModal(true);
                }}
              >
                <PlusIcon className={'w-4 h-4'} />
                <span className="font14">Add Project</span>
              </div>
            </div>
            <div className="w-full flex justify-start items-center gap-3 px-6"></div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center px-4">
          {showSave && (
            <div
              className="px-6 py-2 font14 font-semibold text-white active:scale-95 duration-300 transition-all bg-button hover:bg-buttonhover rounded-md cursor-pointer"
              onClick={() => {
                SaveDetails();
              }}
            >
              Save
            </div>
          )}
        </div>
        {openSkillModal && (
          <AddSkillModal
            CloseFunction={() => {
              setOpenSkillModal(false);
            }}
          />
        )}
        {projectSkillModal && (
          <AddProjectsModal
            CloseFunction={() => {
              setProjectSkillModal(false);
            }}
          />
        )}
      </div>
    );
  };

  return (
    <div className="w-1 h-1">
      <ModalComp
        className="w-5/6 sm:w-4/5 lg:w-3/4 h-3/4 z-10"
        Header={HeaderComp}
        Mainbody={MainbodyComp}
        CloseFunction={() => {
          CloseFunction();
        }}
      />
    </div>
  );
};

export default ProfileEditor;
