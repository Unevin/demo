import { RandomNdigitnumber } from '@/utils';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ModalComp from '../Common/ModalComp';
import { CloseIcon, EditIcon } from '../Icons';
import moment from 'moment';

const ProjectEditorComp = ({ CloseFunction }) => {
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
  //edit
  const [editState, setEditState] = useState(false);

  //redux
  const projectData = useSelector((state) => state.input.projectDetails);
  const Settingdatainvariable = (projectData) => {
    if (projectData && Object.keys(projectData || {}).length > 0) {
      setProjectName(projectData?.projectName || '');
      setProjectDescription(projectData?.projectDescription || '');
      setContactLink(projectData?.contactLink || '');
      setProjectDuration(projectData?.projectDuration || 0);
      setProjectTeamSize(projectData?.projectTeamSize || 1);
      setProjectStartDate(
        new Date(projectData?.projectStartDate)
          .toISOString()
          .substring(0, 16) || ''
      );
      setProjectEndDate(
        new Date(projectData?.projectEndDate).toISOString().substring(0, 16) ||
          ''
      );
      setMajorTasks(projectData?.majorTasks || []);
      setMajorTaskstext('');
      setChallenges(projectData?.challenges || []);
      setChallengestext('');
      setAchievements(projectData?.achievements || []);
      setAchievementstext('');
      setLearnings(projectData?.learnings || []);
      setLearningstext('');
      setProjectSkills(projectData?.projectSkills || []);
    }
  };

  useEffect(() => {
    if (projectData && Object.keys(projectData || {}).length > 0) {
      Settingdatainvariable(projectData || {});
    }
  }, [projectData]);

  //function
  const SaveProject = async () => {
    if (projectName?.trim() == '') {
      sendErrorToast('Please add Project Name');
      return;
    }
    if (projectName?.trim()?.length < 3) {
      sendErrorToast('Project Name should be at least 3 charecters.');
      return;
    }
    if (projectDescription?.trim() == '') {
      sendErrorToast('Please provide project description.');
      return;
    }
    let dataTosend = {
      projectName: projectName || '',
      projectDescription: projectDescription || '',
      contactLink: contactLink || '',
      projectDuration: projectDuration || 0,
      projectTeamSize: projectTeamSize || 1,
      projectStartDate:
        projectStartDate?.trim() == ''
          ? new Date().toISOString()
          : new Date(projectStartDate).toISOString(),
      projectEndDate:
        projectEndDate?.trim() == ''
          ? new Date().toISOString()
          : new Date(projectEndDate).toISOString(),
      majorTasks: majorTasks || [],
      challenges: challenges || [],
      achievements: achievements || [],
      learnings: learnings || [,],
      projectSkills: projectSkills || [],
    };
  };

  const ResetVariable = () => {
    setProjectName('');
    setProjectDescription('');
    setContactLink('');
    setProjectDuration(0);
    setProjectTeamSize(0);
    setProjectStartDate('');
    setProjectEndDate('');
    setMajorTasks([]);
    setMajorTaskstext('');
    setChallenges([]);
    setChallengestext('');
    setAchievements([]);
    setAchievementstext('');
    setLearnings([]);
    setLearningstext('');
    setProjectSkills([]);
  };
  //components
  const HeaderComp = () => {
    return <div className="w-full font-18 font-medium">Add Projects</div>;
  };
  const MainbodyComp = () => {
    return (
      <div className="w-full h-[92%] rounded-b-md flex flex-col justify-start items-start px-2 pt-2">
        <div className="w-full h-full rounded-b-md flex flex-col justify-start items-start gap-2 px-4 py-4  overflow-y-auto">
          <div className="w-full flex flex-col md:flex-row justify-end items-center gap-2 px-4">
            <div
              className="flex justify-center items-center gap-2 px-2.5 py-1.5 rounded-md cursor-pointer text-primary bg-button hover:bg-buttonhover active:scale-95 duration-300 transition-all"
              onClick={() => {
                setEditState(!editState);
                if (editState) {
                  Settingdatainvariable(projectData || {});
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
          </div>
          {editState ? (
            <div className="w-full h-full flex flex-col justify-start items-start gap-2">
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
                    <div className="w-full flex flex-wrap justify-start items-start gap-2 pt-2 px-2">
                      {(majorTasks || []).slice().map((val) => {
                        return (
                          <div
                            key={RandomNdigitnumber(4)}
                            className="px-4 py-1.5 bg-button rounded-md text-primary font14"
                          >
                            {val}
                          </div>
                        );
                      })}
                    </div>
                    <input
                      id="major_tasks"
                      name="major_tasks"
                      className="w-full h-8 py-2 font14 focus:outline-none focus:border-gray-700 border-0 border-gray-400 rounded-md px-4"
                      value={majorTaskstext}
                      onChange={(e) => {
                        setMajorTaskstext(e.target.value);
                      }}
                      onBlur={() => {
                        let cloneText = majorTaskstext.slice() || '';
                        let textArr = cloneText?.split(/,|-/) || [];
                        let clonearr = (majorTasks || [])?.slice() || [];
                        if ((textArr || [])?.length > 0) {
                          (textArr || [])
                            .filter((vl) => vl?.trim() !== '')
                            .map((val) => {
                              if (!clonearr.includes(val)) {
                                clonearr.push(val || '');
                              }
                            });
                        }
                        setMajorTasks(clonearr || []);
                        setMajorTaskstext('');
                      }}
                      placeholder="Please add all major tasks speaperated by comma(,) or hyphen (-)"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <div className="w-full flex justify-start items-center gap-2">
                    <label className="font16 text-secondary font-medium ">
                      Challenges
                    </label>
                  </div>
                  <div className="w-full rounded-md bg-white flex flex-col justify-start items-start">
                    <div className="w-full flex flex-wrap justify-start items-start gap-2 pt-2 px-2">
                      {(challenges || []).slice().map((val) => {
                        return (
                          <div
                            key={RandomNdigitnumber(4)}
                            className="px-4 py-1.5 bg-button rounded-md text-primary font14"
                          >
                            {val}
                          </div>
                        );
                      })}
                    </div>
                    <input
                      id="challenges"
                      name="challenges"
                      className="w-full h-8 py-2 font14 focus:outline-none focus:border-gray-700 border-0 border-gray-400 rounded-md px-4"
                      value={challengestext}
                      onChange={(e) => {
                        setChallengestext(e.target.value);
                      }}
                      onBlur={() => {
                        let cloneText = challengestext.slice() || '';
                        let textArr = cloneText?.split(/,|-/) || [];
                        let clonearr = (challenges || [])?.slice() || [];
                        if ((textArr || [])?.length > 0) {
                          (textArr || [])
                            .filter((vl) => vl?.trim() !== '')
                            .map((val) => {
                              if (!clonearr.includes(val)) {
                                clonearr.push(val || '');
                              }
                            });
                        }
                        setChallenges(clonearr || []);
                        setChallengestext('');
                      }}
                      placeholder="Please add all challenges speaperated by comma(,) or hyphen (-)"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <div className="w-full flex justify-start items-center gap-2">
                    <label className="font16 text-secondary font-medium ">
                      Achivements
                    </label>
                  </div>
                  <div className="w-full rounded-md bg-white flex flex-col justify-start items-start">
                    <div className="w-full flex flex-wrap justify-start items-start gap-2 pt-2 px-2">
                      {(achievements || []).slice().map((val) => {
                        return (
                          <div
                            key={RandomNdigitnumber(4)}
                            className="px-4 py-1.5 bg-button rounded-md text-primary font14"
                          >
                            {val}
                          </div>
                        );
                      })}
                    </div>
                    <input
                      id="achivements"
                      name="achivements"
                      className="w-full h-8 py-2 font14 focus:outline-none focus:border-gray-700 border-0 border-gray-400 rounded-md px-4"
                      value={achievementstext}
                      onChange={(e) => {
                        setAchievementstext(e.target.value);
                      }}
                      onBlur={() => {
                        let cloneText = achievementstext.slice() || '';
                        let textArr = cloneText?.split(/,|-/) || [];
                        let clonearr = (achievements || [])?.slice() || [];
                        if ((textArr || [])?.length > 0) {
                          (textArr || [])
                            .filter((vl) => vl?.trim() !== '')
                            .map((val) => {
                              if (!clonearr.includes(val)) {
                                clonearr.push(val || '');
                              }
                            });
                        }
                        setAchievements(clonearr || []);
                        setAchievementstext('');
                      }}
                      placeholder="Please add all achivements speaperated by comma(,) or hyphen (-)"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <div className="w-full flex justify-start items-center gap-2">
                    <label className="font16 text-secondary font-medium ">
                      Learnings
                    </label>
                  </div>
                  <div className="w-full rounded-md bg-white flex flex-col justify-start items-start">
                    <div className="w-full flex flex-wrap justify-start items-start gap-2 pt-2 px-2">
                      {(learnings || []).map((val) => {
                        return (
                          <div
                            key={RandomNdigitnumber(4)}
                            className="px-4 py-1.5 bg-button rounded-md text-primary font14"
                          >
                            {val}
                          </div>
                        );
                      })}
                    </div>
                    <input
                      id="learnings"
                      name="learnings"
                      className="w-full h-8 py-2 font14 focus:outline-none focus:border-gray-700 border-0 border-gray-400 rounded-md px-4"
                      value={learningstext}
                      onChange={(e) => {
                        setLearningstext(e.target.value);
                      }}
                      onBlur={() => {
                        let cloneText = learningstext?.slice() || '';
                        let textArr = cloneText?.split(/,|-/) || [];
                        let clonearr = (learnings || [])?.slice() || [];
                        if ((textArr || [])?.length > 0) {
                          (textArr || [])
                            .filter((vl) => vl?.trim() !== '')
                            .map((val) => {
                              if (!clonearr.includes(val)) {
                                clonearr.push(val || '');
                              }
                            });
                        }
                        setLearnings(clonearr || []);
                        setLearningstext('');
                      }}
                      placeholder="Please add major tasks speaperated by comma(,) or hyphen (-)"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col justify-start items-start gap-4 pb-4">
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
                  <div className="w-full flex justify-start items-center gap-2">
                    <label className="font16 text-secondary font-medium  w-36">
                      Project Name
                    </label>
                    <div className="w-full flex justify-start items-center font16 h-[36px] text-white px-4">
                      {projectName || ''}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
                  <div className="w-full flex justify-start items-center gap-2">
                    <label className="font16 text-secondary font-medium w-36">
                      Contact Link
                    </label>
                    <div className="w-full flex justify-start items-center font16 h-[36px] text-white px-4">
                      {contactLink || ''}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
                  <div className="w-full flex justify-start items-center gap-2">
                    <label className="font16 text-secondary font-medium  w-52">
                      Project Team Size
                    </label>
                    <div className="w-full flex justify-start items-center font16 h-[36px] text-white px-4">
                      {projectTeamSize || 1}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
                  <div className="w-full flex justify-start items-center gap-2">
                    <label className="font16 text-secondary font-medium w-52">
                      Project Duration
                    </label>
                    <div className="w-full flex justify-start items-center font16 h-[36px] text-white px-4">
                      {projectDuration || 0}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
                  <div className="w-full flex justify-start items-center gap-2">
                    <label className="font16 text-secondary font-medium  w-52">
                      Project Start Date
                    </label>
                    <div className="w-full flex justify-start items-center font16 h-[36px] text-white px-4">
                      {moment(new Date(projectStartDate)).format(
                        'DD-MMM-YYYY hh:mm a'
                      ) || ''}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-1">
                  <div className="w-full flex justify-start items-center gap-2">
                    <label className="font16 text-secondary font-medium w-52">
                      Project End Date
                    </label>
                    <div className="w-full flex justify-start items-center font16 h-[36px] text-white px-4">
                      {moment(new Date(projectEndDate)).format(
                        'DD-MMM-YYYY hh:mm a'
                      ) || ''}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <div className="w-full flex justify-start items-center gap-2">
                    <label className="font16 text-secondary font-medium ">
                      Project Description
                    </label>
                  </div>
                  <div className="w-full flex justify-start items-center font16 h-[36px] text-white px-4">
                    {projectDescription || ''}
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <div className="w-full flex justify-start items-center gap-2">
                    <label className="font16 text-secondary font-medium ">
                      Major Tasks
                    </label>
                  </div>
                  <div className="w-full flex flex-wrap justify-start items-start gap-2 pt-2 px-2">
                    {(majorTasks || []).slice().map((val) => {
                      return (
                        <div
                          key={RandomNdigitnumber(4)}
                          className="px-4 py-1.5 bg-button rounded-md text-primary font14"
                        >
                          {val}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <div className="w-full flex justify-start items-center gap-2">
                    <label className="font16 text-secondary font-medium ">
                      Challenges
                    </label>
                  </div>
                  <div className="w-full flex flex-wrap justify-start items-start gap-2 pt-2 px-2">
                    {(challenges || []).slice().map((val) => {
                      return (
                        <div
                          key={RandomNdigitnumber(4)}
                          className="px-4 py-1.5 bg-button rounded-md text-primary font14"
                        >
                          {val}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <div className="w-full flex justify-start items-center gap-2">
                    <label className="font16 text-secondary font-medium ">
                      Achivements
                    </label>
                  </div>
                  <div className="w-full flex flex-wrap justify-start items-start gap-2 pt-2 px-2">
                    {(achievements || []).slice().map((val) => {
                      return (
                        <div
                          key={RandomNdigitnumber(4)}
                          className="px-4 py-1.5 bg-button rounded-md text-primary font14"
                        >
                          {val}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4">
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <div className="w-full flex justify-start items-center gap-2">
                    <label className="font16 text-secondary font-medium ">
                      Learnings
                    </label>
                  </div>
                  <div className="w-full flex flex-wrap justify-start items-start gap-2 pt-2 px-2">
                    {(learnings || []).map((val) => {
                      return (
                        <div
                          key={RandomNdigitnumber(4)}
                          className="px-4 py-1.5 bg-button rounded-md text-primary font14"
                        >
                          {val}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {editState && (
          <div className="w-full flex justify-end items-center px-4 py-2 ">
            <div
              className="px-6 py-2 font14 font-semibold text-white active:scale-95 duration-300 transition-all bg-button hover:bg-buttonhover rounded-md cursor-pointer"
              onClick={() => {
                SaveProject();
              }}
            >
              Save
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="w-1 h-1">
      <ModalComp
        className="w-5/6 sm:w-4/5 lg:w-3/4 h-4/5 z-30"
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

export default ProjectEditorComp;
