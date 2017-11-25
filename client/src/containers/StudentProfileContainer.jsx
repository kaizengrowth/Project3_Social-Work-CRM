import React from 'react';
import StudentProfile from '../components/StudentProfile';

const StudentProfileContainer = (props) => {
  return (
      <div>
      {props.studentDataLoaded ?
        (<div>
          <div className= 'student_profile'>
            <StudentProfile studentInfo={props.studentInfo}/>
          </div>

          </div>)

        : (<h1> Loading Data arghh </h1>)}

        </div>
    )
  }



export default StudentProfileContainer
