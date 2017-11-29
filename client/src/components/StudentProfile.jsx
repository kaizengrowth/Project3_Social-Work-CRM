import React from 'react';

const StudentProfile = (props) => {
  let student = props.studentInfo;
  return(
    <div className= 'student_profile'>
    {student ?
      (<div className='student_info'>
        <div>
          <h1>{student.first_name + ' ' + student.last_name}</h1>
          <p>Email:  {student.email}</p>
          <p>Phone:  {student.phone}</p>
          <p>About Me: {student.aboutme}</p>
          {/* ACTUALLY MAYBE THIS WILL ONLY SHOW UP ON THE SOCIAL WORKERS PAGE?? */}
          <p>Student Notes: {student.studentnotes}</p>
        </div>
        <img src={student.image} alt='' />
      </div>)
      : (<h1> Loading Student Information </h1>)}
    </div>
  )
}

export default StudentProfile
