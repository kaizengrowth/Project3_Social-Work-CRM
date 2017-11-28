import React from 'react';
import StudentProfile from '../components/StudentProfile';
import Resources from '../components/Resources';
import Referrals from '../components/Referrals';

const StudentProfileContainer = (props) => {
  console.log(props.studentInfo)
  return (
      <div>
      {props.studentDataLoaded ?

        (<div>
            <StudentProfile studentInfo={props.studentInfo}/>
            <div className= 'resources_referrals_container'>
              <Resources studentInfo={props.studentInfo} showResources = {props.showResources} showResourcesOrForm = {props.showResourcesOrForm} getResources={props.getResources} showResources={props.showResources} />
              <Referrals />
            </div>
        </div>)

        : (<h1> Loading Data arghh </h1>)}

        </div>
    )
  }

export default StudentProfileContainer
