import React from 'react';
import StudentProfile from '../components/StudentProfile';
import Resources from '../components/Resources';
import Referrals from '../components/Referrals';

const StudentProfileContainer = (props) => {
  return (
      <div>
      {props.studentDataLoaded ?

        (<div>
            <StudentProfile studentInfo={props.studentInfo}/>
            <Resources />
            <Referrals />
        </div>)

        : (<h1> Loading Data arghh </h1>)}

        </div>
    )
  }



export default StudentProfileContainer
