import { AddProjectData, resetProjectDate } from '@/Slice/inputSlice';
import { RandomNdigitnumber } from '@/utils';
import moment from 'moment/moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ProjectEditorComp from './ProjectEditorComp';

const ProjectDetailsConatiner = () => {
  //state
  const [projectLoader, setProjectLoader] = useState(false);
  const [projectList, setProjectList] = useState([
    {
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
    },
    {
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
    },
  ]);
  const [projectModal, setProjectModal] = useState(false);
  //redux
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full bg-background">
      <div className="w-full h-full rounded-md flex flex-col justify-between items-start gap-3 bg-subcard px-4 py-3">
        <div className="font20 font-semibold text-primary">Projects</div>
        <div className="w-full h-full rounded-md bg-menu flex flex-col justify-between items-center ">
          <div
            className="w-full grid py-2 bg-card rounded-t-md"
            style={{ gridTemplateColumns: ' repeat(7, minmax(0, 1fr))' }}
          >
            <div className="col-span-1 w-full font14 text-secondary font-medium px-2">
              Name
            </div>
            <div className="col-span-2 w-full font14 text-secondary font-medium px-2">
              Description
            </div>
            <div className="col-span-1 w-full font14 text-secondary font-medium px-2">
              Start Date
            </div>
            <div className="col-span-1 w-full font14 text-secondary font-medium px-2">
              End Date
            </div>
            <div className="col-span-2 w-full font14 text-secondary font-medium px-2">
              Achievements
            </div>
          </div>
          {projectLoader ? (
            <div className="w-full flex flex-col justify-start items-start h-full overflow-y-auto rounded-b-md px-2">
              {[...Array(4).keys()].map((val) => {
                return (
                  <div
                    className="w-full grid py-5 hover:bg-hover cursor-pointer border-b border-gray-300 gap-4 "
                    style={{
                      gridTemplateColumns: ' repeat(7, minmax(0, 1fr))',
                    }}
                    key={RandomNdigitnumber(10)}
                  >
                    <div className="col-span-1 w-full px-2 h-4 bg-gray-300 rounded-md animate-pulse" />
                    <div className="col-span-2 w-full px-2 h-4 bg-gray-300 rounded-md animate-pulse" />
                    <div className="col-span-1 w-full px-2 h-4 bg-gray-300 rounded-md animate-pulse" />
                    <div className="col-span-1 w-full px-2 h-4 bg-gray-300 rounded-md animate-pulse" />
                    <div className="col-span-2 w-full px-2 h-4 bg-gray-300 rounded-md animate-pulse" />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full flex flex-col justify-start items-start h-full overflow-y-auto rounded-b-md">
              {(projectList || []).map((project) => {
                return (
                  <div
                    className="w-full grid py-3 hover:bg-hover cursor-pointer border-b border-gray-300"
                    style={{
                      gridTemplateColumns: ' repeat(7, minmax(0, 1fr))',
                    }}
                    key={RandomNdigitnumber(6)}
                    onClick={() => {
                      let SkillData =
                        JSON.parse(JSON.stringify(project || {})) || {};
                      dispatch(AddProjectData(SkillData || {}));
                      setProjectModal(true);
                    }}
                  >
                    <div className="col-span-1 w-full font16 text-primary truncate px-2 text-left">
                      {project?.projectName || ''}
                    </div>
                    <div className="col-span-2 w-full font16 text-primary truncate px-2 text-left">
                      {project?.projectDescription || ''}
                    </div>
                    <div className="col-span-1 w-full font16 text-primary truncate px-2 text-left">
                      {moment(new Date(project?.projectStartDate)).format(
                        'DD-MMM-YYYY hh:mm a'
                      ) || ''}
                    </div>
                    <div className="col-span-1 w-full font16 text-primary truncate px-2 text-left">
                      {moment(new Date(project?.projectEndDate)).format(
                        'DD-MMM-YYYY hh:mm a'
                      ) || ''}
                    </div>
                    <div className="col-span-2 w-full font16 text-primary truncate px-2 text-left">
                      {project?.achievements?.join(', ') || ''}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {projectModal && (
        <ProjectEditorComp
          CloseFunction={() => {
            setProjectModal(false);
            dispatch(resetProjectDate());
          }}
        />
      )}
    </div>
  );
};

export default ProjectDetailsConatiner;
