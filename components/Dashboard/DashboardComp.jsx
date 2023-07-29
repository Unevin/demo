import { RandomNdigitnumber } from '@/utils';
import React, { useState } from 'react';
import ProfileEditor from './ProfileEditor';
import { useDispatch } from 'react-redux';
import { resetUserData } from '@/Slice/inputSlice';

const DashboardComp = () => {
  //state
  const [membersLoader, setMembersLoader] = useState(false);
  const [membersList, setMembersList] = useState([
    {
      userName: 'jane_doe',
      email: 'jane.doe@example.com',
      phone: '+1 555-123-4567',
      gender: 'female',
      fullName: 'Jane Doe',
      currentRole: 'software developer',
      experience: 5,
      skills: ['database', 'devops'],
      intrestAreas: ['database', 'devops'],
      _id: '64c4eb126f9c1f2f7fadcd9e',
    },
    {
      userName: 'Jhon_doe',
      email: 'jhon.doe@example.com',
      phone: '+1 555-123-4567',
      gender: 'male',
      fullName: 'test',
      currentRole: 'software developer',
      experience: 5,
      skills: ['database', 'devops'],
      intrestAreas: ['database', 'devops'],
      _id: '613e8c865b82a028e8b62541',
    },
  ]);
  const [memberDetailsModal, setMemberDetailModal] = useState(false);
  //redux
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full bg-background">
      <div className="w-full h-full rounded-md flex flex-col justify-between items-start gap-3 bg-subcard px-4 py-3">
        <div className="font20 font-semibold text-primary">Members</div>
        <div className="w-full h-full rounded-md bg-menu flex flex-col justify-between items-center ">
          <div
            className="w-full grid py-2 bg-card rounded-t-md"
            style={{ gridTemplateColumns: ' repeat(5, minmax(0, 1fr))' }}
          >
            <div className="w-full font14 text-secondary font-medium px-2">
              Name
            </div>
            <div className="w-full font14 text-secondary font-medium px-2">
              Current Role
            </div>
            <div className="w-full font14 text-secondary font-medium px-2">
              Experience
            </div>
            <div className="w-full font14 text-secondary font-medium px-2">
              Skills
            </div>
            <div className="w-full font14 text-secondary font-medium px-2">
              Intrested Areas
            </div>
          </div>
          {membersLoader ? (
            <div className="w-full flex flex-col justify-start items-start h-full overflow-y-auto rounded-b-md">
              {[...Array(4).keys()].map((val) => {
                return (
                  <div
                    className="w-full grid py-5 hover:bg-hover cursor-pointer border-b border-gray-300 gap-4 "
                    style={{
                      gridTemplateColumns: ' repeat(5, minmax(0, 1fr))',
                    }}
                    key={RandomNdigitnumber(10)}
                  >
                    <div className="w-full px-2 h-4 bg-gray-300 rounded-md animate-pulse" />
                    <div className="w-full px-2 h-4 bg-gray-300 rounded-md animate-pulse" />
                    <div className="w-full px-2 h-4 bg-gray-300 rounded-md animate-pulse" />
                    <div className="w-full px-2 h-4 bg-gray-300 rounded-md animate-pulse" />
                    <div className="w-full px-2 h-4 bg-gray-300 rounded-md animate-pulse" />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full flex flex-col justify-start items-start h-full overflow-y-auto rounded-b-md">
              {(membersList || []).map((member) => {
                return (
                  <div
                    className="w-full grid py-3 hover:bg-hover cursor-pointer border-b border-gray-300"
                    style={{
                      gridTemplateColumns: ' repeat(5, minmax(0, 1fr))',
                    }}
                    key={RandomNdigitnumber(6)}
                    onClick={() => {
                      let cloneData = JSON.parse(JSON.stringify(member || {}));
                      dispatch(AddUserData(cloneData || {}));
                      setMemberDetailModal(true);
                    }}
                  >
                    <div className="w-full font16 text-primary truncate px-2 text-left">
                      {member?.fullName || ''}
                    </div>
                    <div className="w-full font16 text-primary truncate px-2 text-left">
                      {member?.currentRole || ''}
                    </div>
                    <div className="w-full font16 text-primary truncate px-2 text-left">
                      {member?.experience || 0}
                    </div>
                    <div className="w-full font16 text-primary truncate px-2 text-left">
                      {(member?.skills || []).join(', ') || ''}
                    </div>
                    <div className="w-full font16 text-primary truncate px-2 text-left">
                      {(member?.intrestAreas || []).join(', ') || ''}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {memberDetailsModal && (
        <ProfileEditor
          CloseFunction={() => {
            setMemberDetailModal(false);
            dispatch(resetUserData());
          }}
        />
      )}
    </div>
  );
};

export default DashboardComp;
