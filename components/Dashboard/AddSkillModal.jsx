import React, { useState } from 'react';
import ModalComp from '../Common/ModalComp';
import { RandomNdigitnumber, sendErrorToast } from '@/utils';

const AddSkillModal = ({ CloseFunction }) => {
  //state
  const [skillName, setSkillName] = useState('');
  const [description, setDescription] = useState('');
  const [communityLink, setCommunityLink] = useState('');
  const [skillType, setSkillType] = useState('');

  const skilltypeconst = {
    database: {
      title: 'database',
      color: '#00EEFF',
    },
    devops: {
      title: 'devops',
      color: '#00EEFF',
    },
    frontend: {
      title: 'front end development',
      color: '#00EEFF',
    },
    backend: {
      title: 'back end development',
      color: '#00EEFF',
    },
    testing: {
      title: 'testing',
      color: '#00EEFF',
    },
  };
  const datasample = {
    skillName: 'MongoDB',
    shortCode: 'MON',
    color: '#00EEFF',
    icon: 'mongodb-icon.png',
    description:
      'MongoDB is a source-available cross-platform document-oriented database program',
    commnuityLink: 'https://join.skype.com/mongod',
    skillType: 'database',
  };

  //functions
  const SaveSkills = async () => {
    if (skillName?.trim() == '') {
      sendErrorToast('Please enter skill name.');
      return;
    }
    if (skillName?.trim()?.length < 3) {
      sendErrorToast('Skill name should be atleast 3 characters.');
      return;
    }
    let short_code =
      skillName?.trim()?.split(' ').join('')?.slice(0, 3)?.toUpperCase() || '';
    let dataToSend = {
      skillName: skillName || '',
      shortCode: short_code || '',
      color: skilltypeconst?.[skillType]?.color || '',
      icon: '',
      description: description || '',
      commnuityLink: communityLink || '',
      skillType: skilltypeconst?.[skillType]?.title || '',
    };
    console.log('state', 'dataToSend', dataToSend);
    ResetVariable();
  };

  const ResetVariable = () => {
    setSkillName('');
    setDescription('');
    setCommunityLink('');
    setSkillType('');
  };

  //components
  const HeaderComp = () => {
    return <div className="w-full font-18 font-medium">Add Skills</div>;
  };
  const MainbodyComp = () => {
    return (
      <div className="w-full h-full rounded-b-md flex flex-col justify-start items-start px-2 py-2 ">
        <div className="w-full h-full rounded-b-md flex flex-col justify-start items-start gap-2 px-4 py-4">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 px-4">
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium  w-36">
                  Skill Name
                </label>
              </div>
              <input
                id="skill_name"
                name="skill_name"
                type="text"
                className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                value={skillName}
                onChange={(e) => {
                  setSkillName(e.target.value);
                }}
                placeholder="Please enter skill name"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium w-36">
                  Skill Type
                </label>
              </div>
              <select
                id="skill_type"
                name="skill_type"
                type="text"
                className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                value={skillType}
                onChange={(e) => {
                  setSkillType(e.target.value);
                }}
                placeholder="Please select skill type"
              >
                <option key={RandomNdigitnumber(6)} value="" disabled>
                  Please Select a Skill
                </option>
                {Object.keys(skilltypeconst || {}).map((skill) => {
                  return (
                    <option key={RandomNdigitnumber(6)} value={skill}>
                      {skilltypeconst?.[skill]?.title || ''}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="w-full flex justify-start items-center px-4">
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium  w-36">
                  Description
                </label>
              </div>
              <textarea
                id="skill_description"
                name="skill_description"
                className="w-full h-24 py-2 font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Please add skill description"
              />
            </div>
          </div>
          <div className="w-full flex justify-start items-center px-4">
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium  w-36">
                  Community Link
                </label>
              </div>
              <input
                id="skill_communityLink"
                name="skill_communityLink"
                type="text"
                className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                value={communityLink}
                onChange={(e) => {
                  setCommunityLink(e.target.value);
                }}
                placeholder="Please add community link"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center px-4">
          <div
            className="px-6 py-2 font14 font-semibold text-white active:scale-95 duration-300 transition-all bg-button hover:bg-buttonhover rounded-md cursor-pointer"
            onClick={() => {
              SaveSkills();
            }}
          >
            Save
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-1 h-1">
      <ModalComp
        className="w-4/5 sm:w-3/4 lg:w-[70%] h-2/3 z-20"
        Header={HeaderComp}
        Mainbody={MainbodyComp}
        CloseFunction={() => {
          CloseFunction();
          ResetVariable();
        }}
      />
    </div>
  );
};

export default AddSkillModal;
