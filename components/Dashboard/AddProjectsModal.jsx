import React, { useState } from 'react';
import ModalComp from '../Common/ModalComp';

const AddProjectsModal = () => {
  //state
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [contactLink, setContactLink] = useState('');
  const [projectTeamSize, setProjectTeamSize] = useState('');
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
      <div className="w-full h-full rounded-b-md flex flex-col justify-start items-start px-2 py-2 border border-red-600"></div>
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
