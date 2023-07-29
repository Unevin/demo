import React, { useState } from 'react';
import ModalComp from '../Common/ModalComp';

const AddProjectsModal = () => {
  //state
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [contactLink, setContactLink] = useState('');
  const [projectDuration, setProjectDuration] = useState(0);
  const [projectTeamSize, setProjectTeamSize] = useState(0);
  const [projectStartDate, setProjectStartDate] = useState('');
  const [projectEndDate, setProjectEndDate] = useState('');
  const [majorTasks, setMajorTasks] = useState([]);
  const [majorTaskstext, setMajorTaskstext] = useState('');
  const [challenges, setChallenges] = useState([]);
  const [challengestext, setChallengestext] = useState('');
  const [achievements, setAchievements] = useState([]);
  const [achievementstext, setAchievementstext] = useState('');
  const [learnings, setLearnings] = useState([]);
  const [learningstext, setLearningstext] = useState('');
  const [projectSkills, setProjectSkills] = useState([]);

  //sample data
  const projectSmapleData = {
    createdDate: '2023-07-29T09:47:52.550Z',
    projectName: 'Apollo',
    projectDescription:
      'Developing an online e-commerce platform for selling various products.',
    contactLink: 'https://example.com/contact',
    projectDuration: 138,
    projectTeamSize: 8,
    projectStartDate: '2023-05-15T00:00:00.000Z',
    projectEndDate: '2023-09-30T00:00:00.000Z',
    majorTasks: [
      'Designing the user interface',
      'Implementing product catalog',
      'Implementing shopping cart',
      'Setting up payment gateway',
      'Implementing order processing',
    ],
    challenges: [
      'Handling large traffic during sales events',
      'Ensuring secure payment processing',
    ],
    achievements: [
      'Successfully launched the website',
      'Achieved 98% uptime during peak traffic',
      'Positive customer feedback',
    ],
    learnings: [
      'Agile development methodology',
      'Payment gateway integration',
      'Load testing',
    ],
    projectSkills: [
      '64c4d9cddfe5386a7fbeac58',
      '64c4db01dfe5386a7fbeac5d',
      '64c4db62dfe5386a7fbeac60',
    ],
    modifiedDate: '2023-07-29T09:47:52.794Z',
    _id: '64c4e0480b5904143a990f08',
    __v: 0,
  };
  //components
  const HeaderComp = () => {
    return <div className="w-full font-18 font-medium">Add Projects</div>;
  };
  const MainbodyComp = () => {
    return (
      <div className="w-full h-full rounded-b-md flex flex-col justify-start items-start px-2 py-2 border border-red-600 overflow-y-auto">
        <div className="w-full h-full rounded-b-md flex flex-col justify-start items-start gap-2 px-4 py-4">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium  w-36">
                  Project Name
                </label>
              </div>
              <input
                id="project_name"
                name="project_name"
                type="text"
                className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                value={projectName}
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
                placeholder="Please enter project name"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium w-36">
                  Contact Link
                </label>
              </div>
              <input
                id="contact_link"
                name="contact_link"
                type="text"
                className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                value={contactLink}
                onChange={(e) => {
                  setContactLink(e.target.value);
                }}
                placeholder="Please enter contact link"
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium  w-36">
                  Project Team Size
                </label>
              </div>
              <input
                id="project_team_size"
                name="project_team_size"
                type="number"
                min={1}
                className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                value={projectTeamSize}
                onChange={(e) => {
                  setProjectTeamSize(e.target.value);
                }}
                placeholder="Please specify team size"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium w-36">
                  Project Duration
                </label>
              </div>
              <input
                id="project_duration"
                name="project_duration"
                type="number"
                min={0}
                className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                value={projectDuration}
                onChange={(e) => {
                  setProjectDuration(e.target.value);
                }}
                placeholder="Please enter project Description"
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium  w-36">
                  Project Start Date
                </label>
              </div>
              <input
                id="project_start_date"
                name="project_start_date"
                type="datetime-local"
                className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                value={projectStartDate}
                onChange={(e) => {
                  setProjectStartDate(e.target.value);
                }}
                placeholder="Please specify start date"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium w-36">
                  Project End Date
                </label>
              </div>
              <input
                id="project_end_date"
                name="project_end_date"
                type="datetime-local"
                className="w-full h-[36px] font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                value={projectEndDate}
                onChange={(e) => {
                  setProjectEndDate(e.target.value);
                }}
                placeholder="Please specify end date"
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium ">
                  Project Description
                </label>
              </div>
              <textarea
                id="project_description"
                name="project_description"
                className="w-full h-16 py-2 font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                value={projectDescription}
                onChange={(e) => {
                  setProjectDescription(e.target.value);
                }}
                placeholder="Please add project description"
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-start items-center gap-2">
                <label className="font16 text-secondary font-medium ">
                  Major Tasks
                </label>
              </div>
              <div className="w-full rounded-md bg-white flex flex-col justify-start items-start">
                <input
                  id="major_tasks"
                  name="major_tasks"
                  className="w-full h-10 py-2 font14 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md px-4"
                  value={majorTaskstext}
                  onChange={(e) => {
                    setMajorTaskstext(e.target.value);
                  }}
                  onBlur={() => {
                    let cloneText = majorTaskstext.slice() || '';
                    let textArr = cloneText.slice(/,|-/) || [];
                    console.log('state', 'textArr', textArr);
                  }}
                  placeholder="Please add project description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-1 h-1">
      <ModalComp
        className="w-5/6 sm:w-4/5 lg:w-3/4 h-3/4 z-30"
        Header={HeaderComp}
        Mainbody={MainbodyComp}
        CloseFunction={() => {
          CloseFunction();
          // ResetVariable();
        }}
      />
    </div>
  );
};

export default AddProjectsModal;
